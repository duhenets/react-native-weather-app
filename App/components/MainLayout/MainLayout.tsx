import React from 'react';
import { StatusBar } from 'expo-status-bar';
import SwapTheme from 'components/_common/SwapTheme';
import { StMainLayout } from 'components/MainLayout/styled';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const MainLayout: React.FC = () => {
    const insets = useSafeAreaInsets();

    return (
        <StMainLayout insets={insets}>
            <StatusBar animated/>
            <SwapTheme/>
        </StMainLayout>
    );
};

export default MainLayout;
