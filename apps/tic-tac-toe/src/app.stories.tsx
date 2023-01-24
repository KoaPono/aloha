import { ComponentMeta } from '@storybook/react';
import App from './App';

export default {
    title: 'Example/App',
    component: App,

} as ComponentMeta<typeof App>;

export const DefaultTicTacToe = () => <App />;
