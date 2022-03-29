import { Map } from "immutable";

const filterTypeSelected = (state) => state.get("filter");

const getNotifications = (state) => {
  const notifications = state.getIn(["notifications", "entities", "messages"]);
  return Map(notifications);
};

const getUnreadNotifications = (state) => {
  const notifications = state.getIn([
    "notifications",
    "notifications",
    "entities",
    "messages",
  ]);
  const unreadNotifications = Map(notifications).filter(
    (notification) => notification.isRead !== true
  );
  return unreadNotifications.valueSeq().toArray();
};

export { filterTypeSelected, getNotifications, getUnreadNotifications };
