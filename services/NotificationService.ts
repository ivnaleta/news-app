import * as Notifications from 'expo-notifications';
import { NotificationRequestInput, NotificationResponse } from 'expo-notifications';
import { Subscription } from '@unimodules/core';
import { Platform } from "react-native";

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
    if (Platform.OS === "web") {
      return;
    }
    Notifications.scheduleNotificationAsync(input);
  }

  onNotificationPressed(listener: (response: NotificationResponse) => void): Subscription {
    return Notifications.addNotificationResponseReceivedListener(listener);
  }
}



export default new NotificationService();