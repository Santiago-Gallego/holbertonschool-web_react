import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const NotificationItem = ({ type, html, value, markAsRead }) => {
	return (
		<li className={type === 'default' ? css(styles.defaultNotificationStyle) : css(styles.urgentNotificationStyle)} data-notification-type={type} dangerouslySetInnerHTML={html} onClick={markAsRead}>{value}</li>
	)
}

NotificationItem.propTypes = {
	type: PropTypes.string.isRequired,
	html: PropTypes.shape({
		__html: PropTypes.string
	}),
	value: PropTypes.string,
	onClick: PropTypes.func
};

NotificationItem.defaultProps = {
	type: 'default',
	onClick: () => {}
};

const styles = StyleSheet.create({
  defaultNotificationStyle: {
		color: 'blue',
	},

  urgentNotificationStyle: {
		color: 'red',
  },
})

export default memo(NotificationItem)
