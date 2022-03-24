import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from "./uiActionTypes";
import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from "./uiActionCreators";

describe("uiActions", () => {
  it("should return correct value for login action creator", () => {
    const result = login("thedude@biglebowski.com", "tietheroomtogetherman");
    expect(result).toEqual({
      type: LOGIN,
      user: {
        email: "thedude@biglebowski.com",
        password: "tietheroomtogetherman",
      },
    });
  });

  it("should return correct value for logout action creator", () => {
    const result = logout();
    expect(result).toEqual({ type: LOGOUT });
  });

  it("should return correct value for displayNotificationDrawer action creator", () => {
    const result = displayNotificationDrawer();
    expect(result).toEqual({ type: DISPLAY_NOTIFICATION_DRAWER });
  });

  it("should return correct value for hideNotificationDrawer action creator", () => {
    const result = hideNotificationDrawer();
    expect(result).toEqual({ type: HIDE_NOTIFICATION_DRAWER });
  });
});
