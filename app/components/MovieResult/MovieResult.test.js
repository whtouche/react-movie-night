import React from 'react';
import expect from 'expect';
import {shallow, mount} from 'enzyme';

import MovieResult from './MovieResult';

const setup = (result = {}) => {
  const props = {
    result,
  };
  return shallow(<MovieResult {...props} />);
};

describe('<MovieResult />', () => {
  it('is the same as itself', () => {
    const wrapper = setup();
    expect(wrapper).toEqual(wrapper);
  });

  it('passes by tag', () => {
    const wrapper = setup();
    expect(wrapper.type()).toBe('div');
  });

  it('is a success with a mount and a child expectation', () => {
    const wrapper = setup();
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('h3').length).toBe(1);
    expect(wrapper.find('h3').text()).toBe('');

    expect(wrapper.find('div').length).toBe(3);
    expect(wrapper.contains('imdbID').toBeTruthy);
  });
});
