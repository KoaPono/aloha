import SquareStates from './SquareState';
import calculateGameState from './Utils';

describe('calculateGameState', () => {
  describe('X wins', () => {
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
      const squares: Array<SquareStates> = ['X', 'O', '', 'X', 'O', '', 'X', '', ''];
      expect(calculateGameState(squares)).toBe('X Wins!');
    })
    it('Middle down', () => {
      const squares: Array<SquareStates> = ['', 'X', '', 'O', 'X', '', 'O', 'X', ''];
      expect(calculateGameState(squares)).toBe('X Wins!');
    })
    it('Right down', () => {
      const squares: Array<SquareStates> = ['', 'O', 'X', '', 'O', 'X', '', '', 'X'];
      expect(calculateGameState(squares)).toBe('X Wins!');
    })

    it('Left diagonal', () => {
      const squares: Array<SquareStates> = ['X', 'O', '', 'O', 'X', '', '', '', 'X'];
      expect(calculateGameState(squares)).toBe('X Wins!');
    })
    it('Middle diagonal', () => {
      const squares: Array<SquareStates> = ['', 'O', 'X', 'O', 'X', '', 'X', '', ''];
      expect(calculateGameState(squares)).toBe('X Wins!');
    })

  });
  describe('O Wins', () => {
    it('Top across', () => {
      const squares: Array<SquareStates> = ['O', 'O', 'O', 'X', 'X', '', '', '', ''];
      expect(calculateGameState(squares)).toBe('O Wins!');
    })
    it('Middle across', () => {
      const squares: Array<SquareStates> = ['X', 'X', '', 'O', 'O', 'O', '', '', ''];
      expect(calculateGameState(squares)).toBe('O Wins!');
    })
    it('Bottom across', () => {
      const squares: Array<SquareStates> = ['X', 'X', '', '', '', '', 'O', 'O', 'O'];
      expect(calculateGameState(squares)).toBe('O Wins!');
    })

    it('Left down', () => {
      const squares: Array<SquareStates> = ['O', 'X', '', 'O', 'X', '', 'O', '', ''];
      expect(calculateGameState(squares)).toBe('O Wins!');
    })
    it('Middle down', () => {
      const squares: Array<SquareStates> = ['', 'O', '', 'X', 'O', '', 'X', 'O', ''];
      expect(calculateGameState(squares)).toBe('O Wins!');
    })
    it('Right down', () => {
      const squares: Array<SquareStates> = ['', 'X', 'O', '', 'X', 'O', '', '', 'O'];
      expect(calculateGameState(squares)).toBe('O Wins!');
    })

    it('Left diagonal', () => {
      const squares: Array<SquareStates> = ['O', 'X', '', 'X', 'O', '', '', '', 'O'];
      expect(calculateGameState(squares)).toBe('O Wins!');
    })
    it('Middle diagonal', () => {
      const squares: Array<SquareStates> = ['', 'X', 'O', 'X', 'O', '', 'O', '', ''];
      expect(calculateGameState(squares)).toBe('O Wins!');
    })
  })
  
  it('Draw', () => {
    // Calculate and test all possible draw combinations
    const drawCombinations: Array<Array<SquareStates>> = [
      ['O', 'X', 'O', 'X', 'O', 'X', 'X', 'O', 'X'],
      ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'O'],
      ['O', 'X', 'X', 'X', 'O', 'O', 'O', 'X', 'X'],
      ['X', 'O', 'O', 'O', 'X', 'X', 'X', 'O', 'O'],
      ['O', 'X', 'O', 'X', 'O', 'X', 'X', 'O', 'X'],
      ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'O'],
      ['O', 'X', 'X', 'X', 'O', 'O', 'O', 'X', 'X'],
      ['X', 'O', 'O', 'O', 'X', 'X', 'X', 'O', 'O'],
    ];

    drawCombinations.forEach((squares: Array<SquareStates>) => {
      expect(calculateGameState(squares)).toBe('Draw');
    });
  });

  it('Unfinished Game State', () => {
    const squares: Array<SquareStates> = ['X', 'X', '', 'O', '', 'O', '', '', ''];
    expect(calculateGameState(squares)).toBe(null);
  })
});