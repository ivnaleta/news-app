import { ScreenName } from "./ScreenName";

export type RootStackParamList = {
  [ScreenName.ArticleList]: undefined;
  [ScreenName.Article]: { id: number };
  [ScreenName.NotFound]: undefined;
};
