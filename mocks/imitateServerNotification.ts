
import notificationService from "../services/NotificationService";
import { newArticlesUpdateDate } from "./mockConstants";
import { newMockArticle } from "./mocksArticles";

export default function imitateServerNotification() {
  notificationService.scheduleNotificationAsync({
    content: {
      title: newMockArticle.title,
      data: {articleId: newMockArticle.id}
    },
    trigger: newArticlesUpdateDate
  });
}