import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import {Square } from './App';

test('renders learn react link', () => {
  render(<Square />);
  const linkElement = screen.getByRole('square');
  userEvent.click(linkElement)
});
