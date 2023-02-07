import { middleware } from "yargs";
import SquareStates from "./SquareState";

type GameState = 'X Wins!' | 'O Wins!' | 'Draw' | null;

function calculateGameState(squares: Array<SquareStates>) : GameState {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        // Calculate Winning Player
        if (squares[a] === 'O') {
          return 'O Wins!';
        } else if (squares[a] === 'X') {
          return 'X Wins!';
        }
      }
    }
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] == null) {
        return null;
      }
    }

    // Return Draw
    return 'Draw';
  }

  export default calculateGameState;