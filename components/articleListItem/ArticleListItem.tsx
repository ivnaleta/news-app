import React from "react";
import { Image, View } from "react-native";
import { Article } from "../../models/Article";
import { Card } from "react-native-paper";
import articleListItemStyles from "./articleListItemStyles";

interface ArticleListItem {
  article: Article,
  onPress: () => void;
}

 function ArticleListItem(props: ArticleListItem) {
  return (
    <View style={articleListItemStyles.item}>
      <Card onPress={props.onPress} style={{paddingLeft: 0, }}>
        <Card.Title
          style={articleListItemStyles.title}
          title={props.article.title}
          titleNumberOfLines={4}
          leftStyle={articleListItemStyles.leftStyle}
          left={() =>
            <Image source={props.article.source} style={articleListItemStyles.image}/>
          }/>
      </Card>
    </View>
  );
}


export default React.memo(ArticleListItem);