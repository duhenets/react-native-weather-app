import Text from 'components/_common/Text';
import styled from 'styled-components/native';
import { biggestFontSize, headerFontSize, indent, smallFontSize, wp } from 'dimensions';

export const StCurrentInfo = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const StCurrentInfoTempView = styled.View`
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
`;

export const StCurrentInfoTemp = styled(Text)`
    color: ${({ theme }) => theme.PRIMARY_COLOR};
    line-height: ${biggestFontSize}px;
    font-size: ${biggestFontSize}px;
`;

export const StCurrentInfoTempC = styled(Text)`
    line-height: ${headerFontSize}px;
    font-size: ${headerFontSize}px;
`;

export const StCurrentInfoConditionView = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: ${indent / 2}px;
`;

export const StCurrentInfoIcon = styled.Image`
    height: ${wp(10)}px;
    width: ${wp(10)}px;
`;

export const StCurrentInfoCondition = styled(Text)`
    color: ${({ theme }) => theme.SECONDARY_COLOR};
    font-size: ${smallFontSize}px;
`;
