import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useAppState from 'react-native-appstate-hook';

import useCachedResources from './hooks/useCachedResources';
import Navigation, { rootNavigation } from './navigation';
import { Provider as PaperProvider } from 'react-native-paper';
import { useArticlesStore } from "./ArticleStore";
import imitateServerNotification from "./mocks/imitateServerNotification";
import notificationService from "./services/NotificationService";
import { ScreenName } from "./navigation/ScreenName";

export default function App() {
  const isLoadingComplete = useCachedResources();

  const refreshArticles = useArticlesStore((s) => s.refresh);
  const {appState} = useAppState();
  useEffect(() =>  {
    // todo подумать когда лучше рефрешить приложени
    if (appState === 'active') {
      refreshArticles();
    }
  },[appState]);

  useEffect(() => {
    imitateServerNotification();

    notificationService.onNotificationPressed((response ) =>  {
      const articleId = response.notification.request.content.data.articleId
      if (articleId) {
        rootNavigation(ScreenName.Article, {id: articleId});
      }
      console.log("response", response);
    } )
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <PaperProvider>
          <Navigation/>
          <StatusBar/>
        </PaperProvider>
      </SafeAreaProvider>
    );
  }
}

