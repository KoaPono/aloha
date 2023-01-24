import { ComponentMeta } from '@storybook/react';
import {expect} from '@storybook/jest';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import App from './App';

export default {
    title: 'Example/App',
    component: App,

} as ComponentMeta<typeof App>;

export const DefaultTicTacToe = {};

export const XWins = {
    play: async () => {
        const square0= screen.getByTestId('Square-0');
        expect(square0).toHaveTextContent('');
        userEvent.click(square0);
        expect(square0).toHaveTextContent('X');
    },
}