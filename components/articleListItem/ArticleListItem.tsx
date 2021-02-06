import React from "react";
import { Image, ListRenderItemInfo } from "react-native";
import { Article } from "../../models/Article";
import articleIdToImageSourceMapping from "./articleIdToImageSourceMapping";
import { Card } from "react-native-paper";

interface ArticleListItem {
  article: Article,
  onPress: () => void;
}

export default function ArticleListItem(props: ArticleListItem) {
  return (
    <Card onPress={props.onPress}>
      <Card.Title
        title={props.article.title}
        subtitleNumberOfLines={2}
        left={({size}) =>
          <Image source={articleIdToImageSourceMapping[props.article.id]}
                 style={{width: size, height: size}}/>
        }/>
    </Card>
  )
}

