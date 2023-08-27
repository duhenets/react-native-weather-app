import { hp, indent } from 'dimensions';
import Text from 'components/_common/Text';
import styled from 'styled-components/native';

export const StError = styled.View`
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0.5;
    margin-bottom: ${indent}px;
`;

export const StErrorText = styled(Text)`
    font-size: ${hp(10)}px;
`;
