import * as React from 'react';
import { View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/RootStackParamList";
import { ScreenName } from "../../navigation/ScreenName";
import articleListScreenStyles from "../articleListScreen/articleListScreenStyles";
import { Paragraph } from "react-native-paper";
import { useArticlesStore } from "../../ArticleStore";


export default function ArticleScreen(props: StackScreenProps<RootStackParamList, ScreenName.Article>) {
  const article = useArticlesStore((store) => store.articlesMap.get(props.route.params.id));
  /// todo no article found
  if (!article) {
    return null;
  }

  return (
    <View style={articleListScreenStyles.container}>
      <Paragraph>{article.text}</Paragraph>
    </View>
  );
}

