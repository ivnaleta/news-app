import { Article } from "../models/Article";
import { mockArticles } from "../mockData/mockArticles";

/**
 * News Articles Data Service
 */
export interface ArticlesService {
  /**
   * Returns news articles
   */
  getArticles(): Promise<Article[]>;

  /**
   * Register callback for articles update
   * @param cb - callback function
   * @return unregister callback function
   */
  onArticlesUpdate(cb: (articles: Article[]) => void): () => void;
}


class MockArticlesService implements ArticlesService {
  async getArticles() : Promise<Article[]> {
    return mockArticles;
  };

  onArticlesUpdate(cb: (articles: Article[]) => void): () => void {
    const mockUpdateDelay = 10 * 1000;
    const timeoutId = setTimeout(() => cb(mockArticles), mockUpdateDelay);
    return () => clearTimeout(timeoutId);
  }

}

// todo вынести куда-либо
const articlesService: ArticlesService = new MockArticlesService();
export default articlesService;