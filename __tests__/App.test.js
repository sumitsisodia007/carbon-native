import React from 'react';
import renderer from 'react-test-renderer';
import TestComponent from '../App';

it('renders without crashing', () => {
  const rendered = renderer.create(<TestComponent />).toJSON();
  expect(rendered).toBeTruthy();
});
