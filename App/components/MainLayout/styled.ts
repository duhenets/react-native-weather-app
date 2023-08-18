import styled from 'styled-components/native';
import { EdgeInsets } from 'react-native-safe-area-context/src/SafeArea.types';

type TStMainLayoutProps = { insets: EdgeInsets };

export const StMainLayout = styled.View<TStMainLayoutProps>`
    flex: 1;
    align-items: center;
    padding-top: ${({ insets }) => insets.top}px;
    background-color: ${({ theme }) => theme.BACKGROUND_COLOR};
`;
