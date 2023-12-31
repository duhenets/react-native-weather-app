import styled from 'styled-components/native';
import { fontSize } from 'dimensions';

export type TStTextProps = {
    $uppercase?: boolean;
    $alignCenter?: boolean;
};

export const StText = styled.Text<TStTextProps>`
    font-size: ${fontSize}px;
    color: ${({ theme }) => theme.FONT_COLOR};
    ${({ $uppercase }) => $uppercase && 'text-transform: uppercase;'};
    ${({ $alignCenter }) => $alignCenter && 'text-align: center;'};
`;
