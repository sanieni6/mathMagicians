import React from 'react';
import { render, screen } from '@testing-library/react';
import Quote from '../components/quote';

describe('Quote component', () => {
  test('elements correctly', () => {
    render(<Quote />);
    const titleElement = screen.getByText('Quote:');
    expect(titleElement).toBeInTheDocument();
  });
});
