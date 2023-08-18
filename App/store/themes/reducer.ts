import { createSlice } from '@reduxjs/toolkit';
import { darkTheme, lightTheme } from 'themes';
import * as Types from './types';

const initialState: Types.TThemesState = {
    theme: {
        name: Types.THEMES.DARK,
        value: darkTheme,
    },
};

const themeSlice = createSlice({
    name: 'themes',
    initialState,
    reducers: {
        swapTheme: (state) => {
            state.theme = state.theme.name === Types.THEMES.DARK
                ? { name: Types.THEMES.LIGHT, value: lightTheme }
                : { name: Types.THEMES.DARK, value: darkTheme };
        },
    },
});

export const {
    swapTheme,
} = themeSlice.actions;

export default themeSlice;
