import styled from 'styled-components/native';
import { fontSize } from 'dimensions';

export const StText = styled.Text`
    font-size: ${fontSize}px;
    color: ${({ theme }) => theme.FONT_COLOR};
`;
