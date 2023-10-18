import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import ReactDOM from 'react-dom/client';
import {Square, Board } from './App';
import { act } from 'react-dom/test-utils';

let container;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});
afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe('Square', () => {
  it('Square render: ', () => {
    act(() => {
      ReactDOM.createRoot(container).render(<Square />);
    });
    const square = container.querySelector("button");
    expect(square.innerHTML).toBe("");
    act(()=>{
      square.click()
    })
    expect(square.innerHTML).toBe("X");
  });
});




