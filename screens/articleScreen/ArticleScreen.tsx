import * as React from 'react';
import { useContext } from 'react';
import { View } from "react-native";
import { ArticlesStateContext } from "../../hooks/useArticlesState";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/RootStackParamList";
import { ScreenName } from "../../navigation/ScreenName";
import articleListScreenStyles from "../articleListScreen/articleListScreenStyles";
import { Paragraph } from "react-native-paper";


export default function ArticleScreen(props: StackScreenProps<RootStackParamList, ScreenName.Article>) {
  const article = useContext(ArticlesStateContext).find((a) => a.id === props.route.params.id);
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

