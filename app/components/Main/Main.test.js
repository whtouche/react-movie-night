import React from 'react';
import test from 'ava';
import {shallow, mount} from 'enzyme';
import Foo from './Foo';

test('fails with an JSX contain expectation', t => {
  const actual = shallow(<Foo/>);
  const child = <div className='foo'/>;
  t.true(actual.contains(child));
});

test('fails with a tag expectation', t => {
  const actual = shallow(<Foo/>);
  t.is(actual.type(), 'span');
});

test('is a success with a mount and a child expectation', t => {
  const actual = mount(<Foo/>);
  t.is(actual.find('.foo').length, 1);
});
