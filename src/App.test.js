import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import ReactDOM from 'react-dom/client';
import {Square, Board, calculateWinner } from './App';
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

describe('square', () => {
  it('square click: ', () => {
    act(() => {
      ReactDOM.createRoot(container).render(<Board />);
    });
    const squares = container.querySelectorAll(".square");
    act(() => {
      squares[5].click();
    });
    expect(squares[5].innerHTML).toBe("X")
  });


  it('square click (x,o,x,o): ', () => {
    act(() => {
      ReactDOM.createRoot(container).render(<Board />);
    });
    const squares = container.querySelectorAll(".square");
    act(() => {
      squares[5].click();
    });
    expect(squares[5].innerHTML).toBe("X");
    act(() => {
      squares[6].click();
    });
    expect(squares[6].innerHTML).toBe("O");
  });
});

describe("Calculate winner", () => {
  it("null", () => {
    const array = ["X", "X", "O", "O", "O", "X", "X", "O", "X"];
    // X X O
    // O O X
    // X O X
    expect(calculateWinner(array)).toBe(null)
  })
  it("X", () => {
    const array = ["X", "X", "X", "O", "O", "X", "X", "O", "O"];
    // X X X
    // O O X
    // X O O
    expect(calculateWinner(array)).toBe("X")
  })
  it("O", () => {
    const array = ["X", "X", "O", "O", "O", "X", "O", "O", "O"];
    // X X O
    // O O X
    // O O O
    expect(calculateWinner(array)).toBe("O")
  })
});





