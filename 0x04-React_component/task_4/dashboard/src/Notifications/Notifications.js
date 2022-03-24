import React, { Component } from 'react'
import "./Notifications.css";
import NotificationItem from "./NotificationItem";
import icon from "../assets/close-icon.png";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";


export default class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  static propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
  }

  static defaultProps = {
    displayDrawer: false,
    listNotifications: [],
  };

  clickClose() {
    console.log("Close button has been clicked");
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <>
        <div className="menuItem">Your notifications</div>
        {this.props.displayDrawer && (
          <div className="Notifications">
            {this.props.listNotifications.length > 0 ? (
              <>
                <p style={{ display: "inline" }}>
                  Here is the list of notifications
                </p>
                <button
                  style={{ float: "right" }}
                  aria-label="Close"
                  onClick={this.clickClose}
                >
                  <img src={icon} alt="" style={{ height: "3vh" }} />
                </button>
                <ul>
                  {this.props.listNotifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={() => {this.markAsRead(notification.id)}}
                    />
                  ))}
                </ul>
              </>
            ) : <p>No new notification for now</p>}
          </div>
        )}
      </>
    )
  }
}
