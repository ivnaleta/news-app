import { useEffect } from "react";
import articlesService from "../services/ArticleService";
import { useArticlesStore } from "../ArticleStore";


export default function useConnectArticleStoreToData()  {
  const refreshArticles = useArticlesStore((s) => s.refresh);
  const addArticles = useArticlesStore((s) => s.add);

  useEffect(() => {
    articlesService.getArticles()
      .then(refreshArticles);

    const newArticlesSubscription = articlesService.onNewArticles(addArticles);
    return newArticlesSubscription.remove;
  }, []);
}