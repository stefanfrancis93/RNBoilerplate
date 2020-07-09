import App from '@components/app';
import React from 'react';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const component = renderer.create(<App />).toJSON();
  expect(component).toMatchSnapshot();
});
