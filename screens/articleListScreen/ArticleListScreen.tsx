import * as React from 'react';

import articleListScreenStyles from "./articleListScreenStyles";
import { Button, Text, View } from "react-native";
import { ScreenName } from "../../navigation/ScreenName";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/RootStackParamList";

interface ArticleListScreenProps extends StackScreenProps<RootStackParamList, ScreenName.ArticleList> {
}

export default function ArticleListScreen({navigation}: ArticleListScreenProps) {
  return (
    <View style={articleListScreenStyles.container}>
      <Text>Тут должен быть список</Text>
      <Button title={"Переход на страницу новости"} onPress={() => navigation.navigate(ScreenName.Article)}/>
    </View>
  );
}

