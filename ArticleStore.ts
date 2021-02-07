import create, { State } from "zustand";
import { Article } from "./models/Article";
import articlesService from "./services/ArticlesService";

export interface ArticleStore extends State {
  articles: Article[];
  articlesMap: Map<number, Article>;
  refresh: () => void;
}


export const useArticlesStore = create<ArticleStore>(set => ({
  articles: [],
  articlesMap: new Map<number, Article>(),


  refresh: () => {
    articlesService.getArticles()
      .then((articles) => set((state) => ({
        ...state,
        articles,
        articlesMap: articles.reduce((acc, article) =>  {
          acc.set(article.id, article)
          return acc;
        }, new Map())
      })));
  }
}));