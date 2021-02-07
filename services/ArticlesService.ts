import { Article } from "../models/Article";
import { isAfter } from "date-fns";
import { newArticlesUpdateDate } from "../mocks/mockConstants";
import { allMockArticles, initialMockArticles } from "../mocks/mocksArticles";

/**
 * News Articles Data Service
 */
export interface ArticlesService {
  /**
   * Returns news articles
   */
  getArticles(): Promise<Article[]>;
}


class MockArticlesService implements ArticlesService {
  private initialArticlesCount = 5;

  async getArticles(): Promise<Article[]> {
    return isAfter(new Date(), newArticlesUpdateDate)
      ? allMockArticles
      : initialMockArticles;
  };
}

// todo вынести куда-либо
const articlesService: ArticlesService = new MockArticlesService();
export default articlesService;