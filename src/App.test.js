import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import {Square, Board } from './App';

test('Square: ', () => {
  render(<Square />);
  const linkElement = screen.getByRole('square');
  userEvent.click(linkElement)
});

test('Board: ', () => {
  render(<Board />);
  const linkElement = screen.getAllByRole('square');
  for (let el of linkElement){
    userEvent.click(el)
  }
});