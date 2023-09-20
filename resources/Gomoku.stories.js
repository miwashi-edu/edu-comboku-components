import {Gomoku} from "../components/Gomoku";

export default {
    title: 'Gomoku/Gomoku',
    component: Gomoku,
    parameters: {layout: 'centered',},
    tags: ['autodocs'],
    argTypes: {

    },
};

export const Normal = {
    args: {
        cols: 16,
        rows: 16,
        tileSize: 20,
    },
};

