import * as Linking from 'expo-linking';
import { ScreenName } from "./ScreenName";

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      [ScreenName.ArticleList]: "",
      [ScreenName.Article]: "article",
      [ScreenName.NotFound]: '*',
    },
  },
};
