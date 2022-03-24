import React, { memo } from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, html, value, markAsRead }) => {
	return (
		<li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={markAsRead}>{value}</li>
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

export default memo(NotificationItem)
