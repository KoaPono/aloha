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

        await clickSquare(0); //X
        expect(gameStatus).toHaveTextContent('Next player: O');

        await clickSquare(1); //O
        await clickSquare(3); //X
        await clickSquare(4); //O
        await clickSquare(6); //X Wins

        expect(gameStatus).toHaveTextContent('X Wins!');
    },
}

export const OWins = {
    play: async () => {
        const gameStatus= screen.getByTestId('game-status');
        expect(gameStatus).toHaveTextContent('Next player: X');

        await clickSquare(1); //X
        expect(gameStatus).toHaveTextContent('Next player: O');

        await clickSquare(0); //O
        await clickSquare(4); //X
        await clickSquare(3); //O
        await clickSquare(8); //X
        await clickSquare(6); //O Wins

        expect(gameStatus).toHaveTextContent('O Wins!');
    },
}

export const Draw = {
    play: async () => {
        const gameStatus= screen.getByTestId('game-status');
        expect(gameStatus).toHaveTextContent('Next player: X');

        await clickSquare(1); //X
        expect(gameStatus).toHaveTextContent('Next player: O');

        await clickSquare(0); //O
        await clickSquare(3); //X
        await clickSquare(2); //O
        await clickSquare(5); //X
        await clickSquare(4); //O
        await clickSquare(6); //X
        await clickSquare(7); //O
        await clickSquare(8); //X

        expect(gameStatus).toHaveTextContent('Draw');
    },
}

export const ResetGame = {
    play: async () => {
        const gameStatus= screen.getByTestId('game-status');
        expect(gameStatus).toHaveTextContent('Next player: X');

        await clickSquare(0); //X
        expect(gameStatus).toHaveTextContent('Next player: O');

        await clickSquare(1); //O
        await clickSquare(3); //X
        await clickSquare(4); //O
        await clickSquare(6); //X Wins

        expect(gameStatus).toHaveTextContent('X Wins!');

        // Click Reset
        //expect(gameStatus).toHaveTextContent('Next player: X');
    },
  }