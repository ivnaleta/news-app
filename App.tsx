import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import { Provider as PaperProvider } from 'react-native-paper';
import imitateServerNotification from "./mocks/imitateServerNotification";
import useConnectArticleStoreToData from "./hooks/useConnectArticleStoreToData";
import useNotificationInteractionHandler from "./hooks/useNotificationInteractionHandler";

export default function App() {
  const isLoadingComplete = useCachedResources();

  useConnectArticleStoreToData();
  useNotificationInteractionHandler();

  useEffect(imitateServerNotification, []);

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

