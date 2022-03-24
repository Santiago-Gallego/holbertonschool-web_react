import React from 'react';
import BodySection from './BodySection';
import './BodySection.css';
import PropTypes from 'prop-types';

const BodySectionWithMarginBottom = (props) => {
	return (
		<div className='bodySectionWithMargin'>
			<BodySection {...props}/>
		</div>
	)
}

BodySectionWithMarginBottom.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.element
}

export default BodySectionWithMarginBottom
