import React from 'react';
import SquareStates from './SquareState';

interface SquareProps {
    squareState: SquareStates;
    onClick: Function;
}

function Square({
    squareState,
    onClick
}: SquareProps) {
    return (
      <button className="square" onClick={() => onClick()}>
        {squareState}
      </button>
    );
  }

  export default Square;