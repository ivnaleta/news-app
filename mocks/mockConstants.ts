import addSeconds from "date-fns/addSeconds";

const notificationDelayInSeconds = 10;

export const newArticlesUpdateDate = addSeconds(new Date(), notificationDelayInSeconds);