import React from 'react';
import expect from 'expect';
import {shallow, mount} from 'enzyme';
import Foo from './Foo';

describe('a thing', () => {
  it('is the same as itself', () => {
    const actual = shallow(<Foo/>);
    expect(actual).toEqual(actual);
  });

  it('passes by tag', () => {
    const actual = shallow(<Foo/>);
    expect(actual.type()).toBe('div');
  });

  it('is a success with a mount and a child expectation', () => {
    const actual = mount(<Foo/>);
    expect(actual.find('.foo').length).toBe(1);
  });
});
