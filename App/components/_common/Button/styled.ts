import { hp } from 'dimensions';
import styled from 'styled-components/native';

export const StTouchableHighlight = styled.TouchableHighlight`
    width: 100%;
    height: ${hp(5)}px;
    border-radius: ${hp(1)}px;
    overflow: hidden;
`;

export const StButton = styled.View`
    background-color: ${({ theme }) => theme.PRIMARY_COLOR};
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 ${hp(2)}px;
`;
