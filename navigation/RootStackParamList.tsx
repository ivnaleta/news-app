import { ScreenName } from "./ScreenName";

export type RootStackParamList = {
  [ScreenName.ArticleList]: undefined;
  [ScreenName.Article]: undefined;
  [ScreenName.NotFound]: undefined;
};
