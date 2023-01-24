import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Square from './Square';
import SquareStates from './SquareState';
import calculateWinner from './Utils';

const StatusDiv = styled.div`
  margin-bottom: 10px;
`;
const BoardRowDiv = styled.div`
  &:after {
    clear: both;
    content: "";
    display: table;
  }
`;

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
        id={`Square-${i}`}
        onClick={() => handleClick(i)}
      />
    );
  }

  // TODO: Implement reset game function

  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner) {
      setStatus('Winner: ' + winner);
    } else {
      setStatus('Next player: ' + (xIsNext ? 'X' : 'O'));
    }
    // TODO: Configure draw state
  }, [squares])

  return (
    <div>
      <StatusDiv data-testId="game-status">{status}</StatusDiv>
      <BoardRowDiv>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </BoardRowDiv>
      <BoardRowDiv>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </BoardRowDiv>
      <BoardRowDiv>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </BoardRowDiv>
      {/* TODO: Figure out a way to reset the game when won, only show when game is over */}
    </div>
  );
}

export default Board;