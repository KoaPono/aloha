import React from 'react';
import Square from './Square';
import SquareStates from './SquareState';
import calculateGameState from './Utils';

interface BoardProps {}

interface BoardState {
    squares: Array<SquareStates>,
    xIsNext: boolean
}

class Board extends React.Component {
    state: BoardState;

    constructor(props: BoardProps) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
        xIsNext: true,
      };
    }
  
    handleClick(i: number) {
      const squares = this.state.squares.slice();
      if (calculateGameState(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
      });
    }
  
    renderSquare(i: number) {
      return (
        <Square 
          squareState={this.state.squares[i]}
          onClick={() => this.handleClick(i)}
        />
      );
    }
  
    render() {
      const winner = calculateGameState(this.state.squares);
      let status;
      if (winner) {
        status = winner;
        
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }

  export default Board;