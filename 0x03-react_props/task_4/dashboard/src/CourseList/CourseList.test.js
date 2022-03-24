import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('<CourseList />', () => {
  it('renders a <CourseList /> component', () => {
    const wrapper = shallow(<CourseList />);
		expect(wrapper).toHaveLength(1);
		expect(wrapper.exists()).toBe(true);
	});

  it('renders a <CourseList /> component and verifies 5 rows', () => {
    const wrapper = shallow(<CourseList />);
		expect(wrapper.find(CourseListRow)).toHaveLength(5);
		expect(wrapper.find(CourseListRow).get(0).props.textFirstCell).toEqual('Available courses');
		expect(wrapper.find(CourseListRow).get(0).props.isHeader).toBe(true);
		expect(wrapper.find(CourseListRow).get(1).props.textFirstCell).toEqual('Course name');
		expect(wrapper.find(CourseListRow).get(1).props.textSecondCell).toEqual('Credit');
		expect(wrapper.find(CourseListRow).get(1).props.isHeader).toBe(true);
		expect(wrapper.find(CourseListRow).get(2).props.textFirstCell).toEqual('ES6');
		expect(wrapper.find(CourseListRow).get(2).props.textSecondCell).toEqual('60');
		expect(wrapper.find(CourseListRow).get(2).props.isHeader).toBe(false);
		expect(wrapper.find(CourseListRow).get(3).props.textFirstCell).toEqual('Webpack');
		expect(wrapper.find(CourseListRow).get(3).props.textSecondCell).toEqual('20');
		expect(wrapper.find(CourseListRow).get(3).props.isHeader).toBe(false);
		expect(wrapper.find(CourseListRow).get(4).props.textFirstCell).toEqual('React');
		expect(wrapper.find(CourseListRow).get(4).props.textSecondCell).toEqual('40');
		expect(wrapper.find(CourseListRow).get(4).props.isHeader).toBe(false);
	});
});
