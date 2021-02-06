import * as React from 'react';
import { useCallback, useContext } from 'react';

import articleListScreenStyles from "./articleListScreenStyles";
import { FlatList, ListRenderItemInfo, View, } from "react-native";
import { ScreenName } from "../../navigation/ScreenName";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/RootStackParamList";
import { ArticlesStateContext } from "../../hooks/useArticlesState";
import ArticleListItem from "../../components/articleListItem/ArticleListItem";
import { Article } from "../../models/Article";


const articleKeyExtractor = (a: Article) => a.id.toString();

export default function ArticleListScreen(props: StackScreenProps<RootStackParamList, ScreenName.ArticleList>) {
  const articles = useContext(ArticlesStateContext);

  const renderItem = useCallback((item: ListRenderItemInfo<Article>) => {
    return <ArticleListItem
      article={item.item}
      onPress={() => props.navigation.navigate(ScreenName.Article, {id: item.item.id})}
    />
  }, [props.navigation]);

  return (
    <View style={articleListScreenStyles.container}>
      <FlatList data={articles} renderItem={renderItem} keyExtractor={articleKeyExtractor}/>
    </View>
  );
}

