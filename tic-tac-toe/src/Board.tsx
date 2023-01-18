import React, {useState, useEffect} from 'react';
import Square from './Square';
import SquareStates from './SquareState';
import calculateWinner from './Utils';

interface BoardProps {}

interface BoardState {
    squares: Array<SquareStates>,
    xIsNext: boolean
}

const Board = () => {

  const [squares, setSquares] = useState<Array<SquareStates>>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [status, setStatus] = useState<string>('Next player: X');

  function handleClick(i: number) {
    const changedSquares = squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    changedSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(changedSquares);
    setXIsNext(!xIsNext);
  }

  function renderSquare(i: number) {
    return (
      <Square 
        squareState={squares[i]}
        onClick={() => handleClick(i)}
      />
    );
  }

  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner) {
      setStatus('Winner: ' + winner);
    } else {
      setStatus('Next player: ' + (xIsNext ? 'X' : 'O'));
    }
  }, [squares])

  

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;