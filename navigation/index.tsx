import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from './RootStackParamList';
import LinkingConfiguration from './LinkingConfiguration';
import { ScreenName } from "./ScreenName";
import ArticleScreen from "../screens/articleScreen/ArticleScreen";
import ArticleListScreen from "../screens/articleListScreen/ArticleListScreen";

// https://reactnavigation.org/docs/navigating-without-navigation-prop
const navigationRef = React.createRef<NavigationContainerRef>();

export function rootNavigation(name: ScreenName, params: any) {
  navigationRef.current?.navigate(name, params);
}

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration} ref={navigationRef}>
      <RootNavigator/>
    </NavigationContainer>
  );
}


const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  // todo https://reactnavigation.org/docs/headers/
  return (
    <Stack.Navigator>
      <Stack.Screen name={ScreenName.ArticleList} component={ArticleListScreen} options={{title: 'Новости'}}/>
      <Stack.Screen name={ScreenName.Article} component={ArticleScreen} options={{}}/>
      <Stack.Screen name={ScreenName.NotFound} component={NotFoundScreen} options={{title: 'Page Not Found'}}/>
    </Stack.Navigator>
  );
}
