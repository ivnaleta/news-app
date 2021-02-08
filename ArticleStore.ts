import create, { State } from "zustand";
import { Article } from "./models/Article";

export interface ArticleStore extends State {
  articles: Article[];
  articlesMap: Map<number, Article>;
  refresh: (articles: Article[]) => void;
  add: (articles: Article[]) => void;
}


export const useArticlesStore = create<ArticleStore>(set => ({
  articles: [],
  articlesMap: new Map<number, Article>(),


  refresh: (articles: Article[]) => {
    set({...getStateForArticles(articles)});
  },

  add: (articles: Article[]) => {
    set((state) => ({
      ...getStateForArticles([...state.articles, ...articles])
    }))
  }
}));


function getStateForArticles(articles: Article[]) {
  return {
    articles,
    articlesMap: articles.reduce((acc, article) => {
      acc.set(article.id, article)
      return acc;
    }, new Map())
  }
}
