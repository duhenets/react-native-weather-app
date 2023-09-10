import styled from 'styled-components/native';
import Text from 'components/_common/Text';
import { headerFontSize, smallFontSize, smallestFontSize } from 'dimensions';

export const StLocationInfo = styled.View`
    margin-top: auto;
    gap: 5px;
`;

export const StLocationInfoName = styled(Text)`
    color: ${({ theme }) => theme.PRIMARY_COLOR};
    font-size: ${headerFontSize}px;
    line-height: ${headerFontSize}px;
    text-align: center;
`;

export const StLocationInfoRegionAndCountry = styled.View`
    max-width: 60%;
    align-self: center;
    justify-content: center;
    flex-direction: row;
`;

export const StLocationInfoRegion = styled(Text).attrs({ numberOfLines: 1, ellipsizeMode: 'middle' })`
    color: ${({ theme }) => theme.SECONDARY_COLOR};
    font-size: ${smallFontSize}px;
    line-height: ${smallFontSize}px;
`;

export const StLocationInfoCountry = styled(Text)`
    font-size: ${smallFontSize}px;
    line-height: ${smallFontSize}px;
`;

export const StLocationInfoLocalTime = styled(Text)`
    color: ${({ theme }) => theme.SECONDARY_COLOR};
    font-size: ${smallestFontSize}px;
    line-height: ${smallestFontSize}px;
    text-align: center;
`;
