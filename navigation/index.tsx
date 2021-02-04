import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from './RootStackParamList';
import LinkingConfiguration from './LinkingConfiguration';
import { ScreenName } from "./ScreenName";
import ArticleScreen from "../screens/articleScreen/ArticleScreen";
import ArticleListScreen from "../screens/articleListScreen/ArticleListScreen";


export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator/>
    </NavigationContainer>
  );
}


const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ScreenName.ArticleList} component={ArticleListScreen} options={{title: 'Новости'}}/>
      <Stack.Screen name={ScreenName.Article} component={ArticleScreen}/>
      <Stack.Screen name={ScreenName.NotFound} component={NotFoundScreen} options={{title: 'Page Not Found'}}/>
    </Stack.Navigator>
  );
}
