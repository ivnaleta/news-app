import { createContext, useEffect, useState } from "react";
import articlesService from "../services/ArticlesService";
import { Article } from "../models/Article";
import * as Notifications from 'expo-notifications';

export const ArticlesStateContext = createContext<Article[]>([])


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function useArticlesState(): Article[] {
  const [articles, setArticles] = useState<Article[]>([]);

  // todo replace with suspense
  useEffect(() => {

    articlesService.getArticles()
      .then(setArticles);

    // articlesService.onArticlesUpdate((newArticles) => {
    //   console.log(newArticles)
    //
    //
    //   Notifications.scheduleNotificationAsync({
    //     content: {
    //       title: newArticles[0].text
    //     },
    //     trigger: null
    //   });
    // })


  }, []);

  return articles;
}