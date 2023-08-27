import { indent } from 'dimensions';
import styled, { css } from 'styled-components/native';
import { EdgeInsets } from 'react-native-safe-area-context/src/SafeArea.types';

type TStMainLayoutProps = { insets: EdgeInsets };

export const StMainLayout = styled.View<TStMainLayoutProps>`
    flex: 1;
    align-items: center;
    background-color: ${({ theme }) => theme.BACKGROUND_COLOR};
    ${({ insets }) => css`padding: ${insets.top}px ${indent}px ${indent}px ${indent}px;`};
`;

export const StPageLayout = styled.View`
    flex: 1;
    width: 100%;
`;
