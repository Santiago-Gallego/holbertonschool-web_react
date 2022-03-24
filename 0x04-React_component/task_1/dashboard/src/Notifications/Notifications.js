import React from "react";
import "./Notifications.css";
import NotificationItem from "./NotificationItem";
import icon from "../assets/close-icon.png";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

const Notifications = ({ displayDrawer, listNotifications }) => {
  function clickClose() {
    console.log("Close button has been clicked");
  }
  return (
    <>
      <div className="menuItem">Your notifications</div>
      {displayDrawer && (
        <div className="Notifications">
          {listNotifications.length > 0 ? (
            <>
              <p style={{ display: "inline" }}>
                Here is the list of notifications
              </p>
              <button
                style={{ float: "right" }}
                aria-label="Close"
                onClick={clickClose}
              >
                <img src={icon} alt="" style={{ height: "3vh" }} />
              </button>
              <ul>
              {listNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                />
              ))}
            </ul>
            </>
          ) : <p>No new notification for now</p>}
        </div>
      )}
    </>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
