import { ComponentMeta } from '@storybook/react';
import {expect} from '@storybook/jest';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import App from './App';

export default {
    title: 'Example/App',
    component: App,

} as ComponentMeta<typeof App>;

const clickSquare = async(squareNumber: number) => {
    const square = screen.getByTestId(`Square-${squareNumber}`);
    expect(square).toHaveTextContent('');
    userEvent.click(square);
}

export const DefaultTicTacToe = {};

export const XWins = {
    play: async () => {
        const gameStatus= screen.getByTestId('game-status');
        expect(gameStatus).toHaveTextContent('Next player: X');
        await clickSquare(0);
        await clickSquare(1);
        await clickSquare(3);

        //TODO: Finish the Test

        expect(gameStatus).toHaveTextContent('Next player: O');
    },
}

export const OWins = {
    play: async () => {
        //TODO: Finish the Test
    },
}

export const Draw = {
    play: async () => {
        //TODO: Finish the Test
    },
}

export const ResetGame = {
    play: async () => {
      // TODO: Finish the test
    }
  }