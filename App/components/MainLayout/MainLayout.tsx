import React from 'react';
import { Outlet } from 'react-router';
import { StatusBar } from 'expo-status-bar';
import SwapTheme from 'components/SwapTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StMainLayout, StPageLayout } from 'components/MainLayout/styled';

const MainLayout: React.FC = () => {
    const insets = useSafeAreaInsets();

    return (
        <StMainLayout insets={insets}>
            <StatusBar animated/>
            <SwapTheme/>
            <StPageLayout>
                <Outlet/>
            </StPageLayout>
        </StMainLayout>
    );
};

export default MainLayout;
