import React from 'react';
import { shallow } from 'enzyme';
import App from './App'

describe('<App />', () => {
  it('renders an <App /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toHaveLength(1);
	});

	it('renders an <App /> component checking for App-header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div.App-header')).toHaveLength(1);
  });

	it('renders an <App /> component checking for App-body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div.App-body')).toHaveLength(1);
  });

	it('renders an <App /> component checking for App-footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div.App-footer')).toHaveLength(1);
  });
});
