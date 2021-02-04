import React from "react";
import { Text } from "react-native";
import { Article } from "../models/Article";

interface ArticleListItemProps {
  article: Article
}

export default function ArticleListItem (props: ArticleListItemProps)  {
  return <Text>ArticleListItem</Text>
}