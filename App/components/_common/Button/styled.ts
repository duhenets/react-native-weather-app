import { hp } from 'dimensions';
import styled from 'styled-components/native';

type TStTouchableHighlight = {
    $margin: string;
};

export const StTouchableHighlight = styled.TouchableHighlight<TStTouchableHighlight>`
    width: 100%;
    height: ${hp(5)}px;
    border-radius: ${hp(1)}px;
    overflow: hidden;
    ${({ $margin }) => $margin && `margin: ${$margin};`};
`;

export const StButton = styled.View`
    background-color: ${({ theme }) => theme.PRIMARY_COLOR};
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 ${hp(2)}px;
`;
