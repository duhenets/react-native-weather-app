import Text from 'components/_common/Text';
import { largeFontSize } from 'dimensions';
import styled from 'styled-components/native';

export const StWeatherError = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const StWeatherErrorText = styled(Text)`
    color: ${({ theme }) => theme.SECONDARY_COLOR};
    font-size: ${largeFontSize}px;
    text-align: center;
`;
