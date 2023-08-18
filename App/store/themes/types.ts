import { DefaultTheme } from 'styled-components';

export enum THEMES {
    LIGHT = 'light',
    DARK = 'dark',
}

export type TThemesState = {
    theme: TThemeState;
};

export type TThemeState = {
    name: THEMES;
    value: DefaultTheme;
};
