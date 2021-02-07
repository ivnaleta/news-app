import * as Notifications from 'expo-notifications';
import { NotificationResponse } from "expo-notifications";
import { Subscription } from '@unimodules/core';
import { NotificationRequestInput } from "expo-notifications/build/Notifications.types";

export class NotificationService {
  constructor() {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });
  }

  scheduleNotificationAsync(input: NotificationRequestInput) {
    Notifications.scheduleNotificationAsync(input);
  }

  onNotificationPressed(listener: (response: NotificationResponse) => void): Subscription {
    return Notifications.addNotificationResponseReceivedListener(listener);
  }
}



export default new NotificationService();