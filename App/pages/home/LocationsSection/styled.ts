import Text from 'components/_common/Text';
import styled from 'styled-components/native';
import ChevronRight from 'images/chevron-right.svg';
import { indent, largeFontSize, smallFontSize } from 'dimensions';

type TStLocation = { $first: boolean };

export const StLocation = styled.View<TStLocation>`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: ${indent}px;
    width: 100%;
    margin-top: ${({ $first }) => ($first ? 0 : indent)}px;
`;

export const StLocationInfo = styled.View`
    flex: 8;
`;

export const StLocationName = styled(Text).attrs({ numberOfLines: 1, ellipsizeMode: 'tail' })`
    font-size: ${largeFontSize}px;
    font-weight: bold;
`;

export const StLocationRegion = styled(Text).attrs({ numberOfLines: 1, ellipsizeMode: 'tail' })`
    opacity: 0.5;
    font-size: ${smallFontSize}px;
`;

export const StLocationGo = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.PRIMARY_COLOR};
    padding: ${indent / 2}px;
    border-radius: 50px;
    width: 50px;
    height: 50px;
`;

export const StLocationGoIcon = styled(ChevronRight)`
    color: ${({ theme }) => theme.WHITE_COLOR};
`;
