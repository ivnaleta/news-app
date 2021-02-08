import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./RootStackParamList";
import containerStyles from "../containerStyles";
import { ScreenName } from "./ScreenName";
import ArticleListScreen from "../screens/articleListScreen/ArticleListScreen";
import ArticleScreen from "../screens/articleScreen/ArticleScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import { useArticlesStore } from "../ArticleStore";
import * as React from "react";
import { isArticleScreenShownAsModal } from "../constants";

const Stack = createStackNavigator<RootStackParamList>();
const articleListScreenTitle = "News";
const staticTitleWithoutBackButton = {headerLeft: null as any, title: articleListScreenTitle};


// Навигаторы разделены на два так как у них сильно отличаются опции и с условиями внутри компонента сложнее читается
function WebRootNavigator() {
  return (
    <Stack.Navigator mode={"modal"} screenOptions={{cardStyle: containerStyles.screenCard}}>
      <Stack.Screen name={ScreenName.ArticleList}
                    component={ArticleListScreen}
                    options={staticTitleWithoutBackButton}
      />
      <Stack.Screen name={ScreenName.Article}
                    component={ArticleScreen}
                    options={staticTitleWithoutBackButton}
      />
      <Stack.Screen name={ScreenName.NotFound} component={NotFoundScreen} options={{title: 'Page Not Found'}}/>
    </Stack.Navigator>
  );
}


function NativeRootNavigator() {
  const articlesMap = useArticlesStore((state) => state.articlesMap);

  return (
    <Stack.Navigator>
      <Stack.Screen name={ScreenName.ArticleList}
                    component={ArticleListScreen}
                    options={{title: articleListScreenTitle}}
      />
      <Stack.Screen name={ScreenName.Article}
                    component={ArticleScreen}
                    options={({route}) => ({title: articlesMap.get(route.params.id)?.title || ""})}
      />
      <Stack.Screen name={ScreenName.NotFound} component={NotFoundScreen} options={{title: 'Page Not Found'}}/>
    </Stack.Navigator>
  );
}

export default isArticleScreenShownAsModal
  ? WebRootNavigator
  : NativeRootNavigator;