import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import TestRenderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Home from '../components/home';

describe('Home component', () => {
  test('renders correctly', () => {
    const component = TestRenderer.create(<Home />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('elements correctly', () => {
    render(<Home />);
    const titleElement = screen.getByText('Welcome to our page!');
    expect(titleElement).toBeInTheDocument();
    const pElements = screen.getAllByText(/Lorem ipsum/);
    expect(pElements.length).toBe(2);
  });
});
