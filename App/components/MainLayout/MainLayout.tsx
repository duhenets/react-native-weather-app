import React from 'react';
import Search from 'components/Search';
import Results from 'components/Results';
import { StatusBar } from 'expo-status-bar';
import SwapTheme from 'components/SwapTheme';
import { StMainLayout } from 'components/MainLayout/styled';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const MainLayout: React.FC = () => {
    const insets = useSafeAreaInsets();

    return (
        <StMainLayout insets={insets}>
            <StatusBar animated/>
            <SwapTheme/>
            <Results/>
            <Search/>
        </StMainLayout>
    );
};

export default MainLayout;
