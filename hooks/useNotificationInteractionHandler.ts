import { useEffect } from "react";
import notificationService from "../services/NotificationService";
import { rootNavigation } from "../navigation";
import { ScreenName } from "../navigation/ScreenName";


export default function useNotificationInteractionHandler() {
  useEffect(() => {
    const notificationsSubscription =
      notificationService.onNotificationPressed((response) => {
        const articleId = response.notification.request.content.data.articleId;
        if (articleId) {
          rootNavigation(ScreenName.Article, {id: articleId});
        }
      });
    return notificationsSubscription.remove;
  }, []);
}