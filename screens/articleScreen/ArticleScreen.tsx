import * as React from 'react';
import { useCallback, useEffect, useMemo } from 'react';
import { Image, ScrollView, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/RootStackParamList";
import { ScreenName } from "../../navigation/ScreenName";
import { Button, Modal, Paragraph, Portal, Title } from "react-native-paper";
import { useArticlesStore } from "../../ArticleStore";
import { CommonActions } from '@react-navigation/native';
import { isArticleScreenShownAsModal } from "../../constants";
import { ArticleView } from "../../components/articleView/articleView";


export default function ArticleScreen(props: StackScreenProps<RootStackParamList, ScreenName.Article>) {
  // если история переходов пуста, то в веб варианте не показывается экран списка статей за оверлеем
  // этот эффект изменяет историю переходов, добавляя экран списка статей до экрана статьи
  // Оставил его для нативного приложения так как пустая история переходов на нем тоже ошибка
  useEffect(() => {
    const isFirstOpenScreen = props.navigation.dangerouslyGetState().index === 0;
    if (isFirstOpenScreen) {
      props.navigation.dispatch((state: any) => {
        const routes = [{name: ScreenName.ArticleList}, ...state.routes];

        return CommonActions.reset({
          ...state,
          routes,
          index: routes.length - 1,
        });
      });
    }
  }, [props.navigation]);


  const id = useMemo(() => {
    // при получении id из url его тип строка
    const paramsId = props.route.params.id as any;
    return typeof paramsId === "string"
      ? parseInt(paramsId, 10)
      : paramsId;
  }, [props.route.params.id]);

  const navigateToArticles =
    useCallback(() => props.navigation.navigate(ScreenName.ArticleList), [props.navigation]);

  const article = useArticlesStore((state) => state.articlesMap.get(id));


  // здесь может быть ошибка открытия страницы несуществующей статьи (будет отображаться пустота вместо страницы).
  // Она не обработана так как это информация об ошибке приходила бы скорее всего во время
  // получения данных и я не хотел придумывать имитацию
  if (!article) {
    return null;
  }

  return <ArticleView article={article} isModal={isArticleScreenShownAsModal} onModalClose={navigateToArticles}/>
}

