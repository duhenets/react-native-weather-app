import styled, { css } from 'styled-components/native';
import { hp, indent, wp } from 'dimensions';
import MoonIcon from 'images/moon.svg';
import SunIcon from 'images/sun.svg';

export const StSwapThemeView = styled.View`
    height: ${hp(5)}px;
    width: 100%;
    margin: ${indent}px 0;
`;

export const StSwapThemeArea = styled.View`
    flex: 1;
    align-self: center;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: ${wp(30)}px;
    border-radius: ${wp(4)}px;
    background-color: ${({ theme }) => theme.SECTION_COLOR};
`;

export const StSwapThemeImage = styled.View`
    flex: 0.4;
    height: 75%;
    align-items: center;
    justify-content: center;
`;

type TActive = { $active: boolean };

const imageColorStyle = css<TActive>`
    color: ${({ theme, $active }) => ($active ? theme.PRIMARY_COLOR : theme.SECONDARY_COLOR)};
`;

export const StMoonIcon = styled(MoonIcon)<TActive>`
    ${imageColorStyle};
`;

export const StSunIcon = styled(SunIcon)<TActive>`
    ${imageColorStyle};
`;
