import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import TestRenderer from 'react-test-renderer';
import Calc from '../components/Calculator';

describe('Test the calc', () => {
  describe('Render the numbers', () => {
    test('It renders 0', () => {
      render(<Calc />);
      const zeros = screen.getAllByText('0');
      expect(zeros[1]).toBeInTheDocument();
    });
    test('It renders 1', () => {
      render(<Calc />);
      expect(screen.getByText('1')).toBeInTheDocument();
    });
    test('It renders 2', () => {
      render(<Calc />);
      expect(screen.getByText('2')).toBeInTheDocument();
    });
    test('It renders 3', () => {
      render(<Calc />);
      expect(screen.getByText('3')).toBeInTheDocument();
    });
    test('It renders 4', () => {
      render(<Calc />);
      expect(screen.getByText('4')).toBeInTheDocument();
    });
    test('It renders 5', () => {
      render(<Calc />);
      expect(screen.getByText('5')).toBeInTheDocument();
    });
    test('It renders 6', () => {
      render(<Calc />);
      expect(screen.getByText('6')).toBeInTheDocument();
    });
    test('It renders 7', () => {
      render(<Calc />);
      expect(screen.getByText('7')).toBeInTheDocument();
    });
    test('It renders 8', () => {
      render(<Calc />);
      expect(screen.getByText('8')).toBeInTheDocument();
    });
    test('It renders 9', () => {
      render(<Calc />);
      expect(screen.getByText('9')).toBeInTheDocument();
    });
    test('It renders AC', () => {
      render(<Calc />);
      expect(screen.getByText('AC')).toBeInTheDocument();
    });
    test('It renders +/-', () => {
      render(<Calc />);
      expect(screen.getByText('+/-')).toBeInTheDocument();
    });
    test('It renders %', () => {
      render(<Calc />);
      expect(screen.getByText('%')).toBeInTheDocument();
    });
    test('It renders ÷', () => {
      render(<Calc />);
      expect(screen.getByText('÷')).toBeInTheDocument();
    });
    test('It renders x', () => {
      render(<Calc />);
      expect(screen.getByText('x')).toBeInTheDocument();
    });
    test('It renders -', () => {
      render(<Calc />);
      expect(screen.getByText('-')).toBeInTheDocument();
    });
    test('It renders +', () => {
      render(<Calc />);
      expect(screen.getByText('+')).toBeInTheDocument();
    });
    test('It renders .', () => {
      render(<Calc />);
      expect(screen.getByText('.')).toBeInTheDocument();
    });
    test('It renders =', () => {
      render(<Calc />);
      expect(screen.getByText('=')).toBeInTheDocument();
    });
  });
  describe('Test the buttons', () => {
    test('renders correctly', () => {
      const component = TestRenderer.create(<Calc />);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    test('Test rows and cells', () => {
      let tds = 0;
      render(<Calc />);
      const rows = screen.getAllByRole('row');
      expect(rows.length).toBe(6);
      rows.forEach((row) => {
        tds = screen.getAllByRole('cell', { container: row });
      });
      expect(tds.length).toBe(20);
    });
  });
  describe('Evaluate different situations when buttons are pressed', () => {
    test('should display 15', () => {
      render(<Calc />);
      fireEvent.click(screen.getByText('1'));
      fireEvent.click(screen.getByText('5'));
      expect(document.querySelector('.result').textContent).toBe('15');
    });
    test('should display 111', () => {
      render(<Calc />);
      const button = screen.getByText('1');
      fireEvent.click(button);
      fireEvent.click(button);
      fireEvent.click(button);
      expect(document.querySelector('.result').textContent).toBe('111');
    });
    test('should display 4', () => {
      render(<Calc />);
      fireEvent.click(screen.getByText('2'));
      fireEvent.click(screen.getByText('x'));
      fireEvent.click(screen.getByText('2'));
      fireEvent.click(screen.getByText('='));
      expect(document.querySelector('.result').textContent).toBe('4');
    });
  });
});
