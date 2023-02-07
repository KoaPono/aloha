import SquareStates from './SquareState';
import calculateGameState from './Utils';

describe('calculateGameState', () => {
  it('should return X when X wins', () => {
    const squares: Array<SquareStates> = ['X', 'X', 'X', 'O', 'O', '', '', '', ''];
    expect(calculateGameState(squares)).toBe('X');
    // TODO: Calculate and test all possible winning combinations for X
  });
  it('should return O when O wins', () => {
    const squares: Array<SquareStates> = ['X', 'X', 'O', 'O', 'O', '', '', '', ''];
    expect(calculateGameState(squares)).toBe('O');
    // TODO: Calculate and test all possible winning combinations for O
  });
  it('should return an empty string when no one wins', () => {
    const squares: Array<SquareStates> = ['X', 'X', 'O', 'O', 'X', '', '', '', ''];
    expect(calculateGameState(squares)).toBe('');
    // TODO: Calculate and test all possible draw combinations for 
  });
});