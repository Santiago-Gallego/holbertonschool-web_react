import React, { Component } from 'react'
import NotificationItem from "./NotificationItem";
import icon from "../assets/close-icon.png";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from 'aphrodite';

const menuItemStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
}

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

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.listNotifications.length > this.props.listNotifications.length)
      return true;
    return false;
  }

  clickClose() {
    console.log("Close button has been clicked");
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <>
        <div className="menuItem" style={menuItemStyle}>Your notifications</div>
        {this.props.displayDrawer && (
          <div className={css(styles.notificationPanelStyle)}>
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
                  ) : <p>No new notification for now</p>
            }
            </div>
          </div>
        )}
      </>
    )
  }
}

const styles = StyleSheet.create({
  notificationPanelStyle: {
    border: '1px red dashed',
    padding: '1rem',
    width: '35%',
    float: 'right',
  },
})
