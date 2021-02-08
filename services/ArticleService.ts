import { Article } from "../models/Article";
import { differenceInMilliseconds, isAfter } from "date-fns";
import { newArticlesUpdateDate } from "../mocks/mockConstants";
import { allMockArticles, initialMockArticles, newMockArticle } from "../mocks/mocksArticles";
import { Subscription } from "@unimodules/core";
import { noop } from "lodash";

/**
 * Сервис для работы с данными новостных статей
 */
export interface ArticleService {
  /**
   * Возвращает новостные статьи
   */
  getArticles(): Promise<Article[]>;


  /**
   * Метод будет вызывать слушателя при получении новых данных
   * В проекте это скорее имитация дата сообщений, которые приходят в приложение параллельно с пуш уведомлениями
   * @param listener
   *
   */
  onNewArticles(listener: (articles: Article[]) => void): Subscription;
}


class MockArticleService implements ArticleService {
  async getArticles(): Promise<Article[]> {
    return isAfter(new Date(), newArticlesUpdateDate)
      ? allMockArticles
      : initialMockArticles;
  };

  onNewArticles(listener: (articles: Article[]) => void): Subscription {
    const now = new Date();
    if (isAfter(now, newArticlesUpdateDate)) {
      return {remove: noop};
    }

    const timeoutDelay = differenceInMilliseconds(newArticlesUpdateDate, now);
    const timeoutId = setTimeout(() => listener([newMockArticle]), timeoutDelay);

    return {remove: () => clearTimeout(timeoutId)};
  }
}

const articlesService: ArticleService = new MockArticleService();
export default articlesService;