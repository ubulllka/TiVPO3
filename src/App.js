import './style.css';


export function Square() {
  return (
    <button role="square" className="square">X</button>
  );
}

export function Board() {
  return (
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
  )
}
