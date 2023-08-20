import { createSelector } from 'reselect';
import { TApplicationState } from 'store';
import { DefaultTheme } from 'styled-components';
import * as Types from './types';

export const getThemesState = (state: TApplicationState): Types.TThemesState => state.themes;

export const getThemeState = createSelector(
    getThemesState,
    (state): Types.TThemeState => state.theme,
);

export const getThemeName = createSelector(
    getThemeState,
    (state): Types.THEMES => state.name,
);

export const getIsDarkTheme = createSelector(
    getThemeName,
    (name): boolean => name === Types.THEMES.DARK,
);

export const getThemeValue = createSelector(
    getThemeState,
    (state): DefaultTheme => state.value,
);
