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
  it('Board render: ', () => {
    act(() => {
      ReactDOM.createRoot(container).render(<Board />);
    });

    const squares = container.querySelectorAll(".square");
    act(() => {
      squares[5].click();
    });

    expect(squares[5].innerHTML).toBe("X")
  });
});




