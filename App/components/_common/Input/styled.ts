import { fontSize, hp } from 'dimensions';
import styled, { css } from 'styled-components/native';

export const StInput = styled.TextInput.attrs(({ theme }) => ({ placeholderTextColor: theme.FONT_COLOR }))`
    width: 100%;
    height: ${hp(5)}px;
    padding: 0 ${hp(2)}px;
    border-radius: ${hp(1)}px;
    font-size: ${fontSize}px;
    ${({ theme }) => css`
        border: 1px solid ${theme.FONT_COLOR};
        color: ${theme.FONT_COLOR};
    `};
`;
