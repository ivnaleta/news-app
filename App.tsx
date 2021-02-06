import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import useArticlesState, { ArticlesStateContext } from "./hooks/useArticlesState";
import { Provider as PaperProvider } from 'react-native-paper';


export default function App() {
  const isLoadingComplete = useCachedResources();
  const articles = useArticlesState();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <PaperProvider>
          <ArticlesStateContext.Provider value={articles}>
            <Navigation/>
            <StatusBar/>
          </ArticlesStateContext.Provider>
        </PaperProvider>
      </SafeAreaProvider>
    );
  }
}

