import SquareStates from './SquareState';
import calculateGameState from './Utils';

describe('calculateGameState', () => {
  describe('X wins', () => {
    // TODO: Calculate and test all possible winning combinations for X
    // 3 across, 3 down, 2 diagonal
    it('Top across', () => {
      const squares: Array<SquareStates> = ['X', 'X', 'X', 'O', 'O', '', '', '', ''];
      expect(calculateGameState(squares)).toBe('X Wins!');
    })
    it('Middle across', () => {
      const squares: Array<SquareStates> = ['O', 'O', '', 'X', 'X', 'X', '', '', ''];
      expect(calculateGameState(squares)).toBe('X Wins!');
    })
    it('Bottom across', () => {
      const squares: Array<SquareStates> = ['O', 'O', '', '', '', '', 'X', 'X', 'X'];
      expect(calculateGameState(squares)).toBe('X Wins!');
    })

    it('Left down', () => {

    })
    it('Middle down', () => {
      
    })
    it('Right down', () => {
      
    })

    it('Left diagonal', () => {

    })
    it('Middle diagonal', () => {
      
    })

  });
  it('should return O when O wins', () => {
    const squares: Array<SquareStates> = ['X', 'X', '', 'O', 'O', 'O', '', '', ''];
    expect(calculateGameState(squares)).toBe('O Wins!');
    // TODO: Calculate and test all possible winning combinations for O
    // 3 across, 3 down, 2 diagonal
  });
  it('should return an empty string when no one wins', () => {
    //const squares: Array<SquareStates> = ['X', 'X', 'O', 'O', 'X', '', '', '', ''];
    //expect(calculateGameState(squares)).toBe('');
    // TODO: Calculate and test all possible draw combinations
  });
});