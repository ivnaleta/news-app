import { Button, Modal, Paragraph, Portal, Title } from "react-native-paper";
import { Image, ScrollView, View } from "react-native";
import * as React from "react";
import { Article } from "../../models/Article";
import { noop } from "lodash";
import articleViewStyles from "./articleViewStyles";

interface ArticleViewProps {
  article: Article;
  isModal: boolean;
  onModalClose?: () => void;
}

export function ArticleView({article, isModal, onModalClose = noop}: ArticleViewProps) {
  const content =
    <ScrollView>
      <Image source={article.source} style={articleViewStyles.image}/>
      <Paragraph>{article.text}</Paragraph>
    </ScrollView>

  if (isModal) {
    return (
      <Portal>
        <Modal visible={true}
               contentContainerStyle={articleViewStyles.modalContainer}
               onDismiss={onModalClose}
        >
          <View style={articleViewStyles.article}>
            <Title>{article.title}</Title>
            {content}
            <View style={articleViewStyles.modalButtonContainer}>
              <Button mode={"contained"}
                      style={articleViewStyles.modalCloseButton}
                      onPress={onModalClose}
              >
                Close
              </Button>
            </View>
          </View>
        </Modal>
      </Portal>
    );
  } else {
    return <View style={articleViewStyles.article}>{content}</View>;
  }
}