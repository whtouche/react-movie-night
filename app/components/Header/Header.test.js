import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';

import Header from './Header';


describe('<Header />', () => {
  it('renders h1 and p', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Movie Night');

    expect(wrapper.find('p').length).toBe(1);
    expect(wrapper.find('p').text()).toEqual('Let\'s go to the movies!');
  });
});
