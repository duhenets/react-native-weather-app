import React from 'react';
import store from 'store';
import locales from 'locales';
import { I18nextProvider } from 'react-i18next';
import { Provider, useSelector } from 'react-redux';
import { getThemeValue } from 'store/themes/selectors';
import { ThemeProvider } from 'styled-components/native';
import { Edge, SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MainLayout from './components/MainLayout';

const EDGES: Array<Edge> = ['left', 'right', 'bottom'];

const App: React.FC = () => {
    const theme = useSelector(getThemeValue);

    return (
        <SafeAreaProvider>
            <ThemeProvider theme={theme}>
                <I18nextProvider i18n={locales}>
                    <SafeAreaView edges={EDGES} style={{ flex: 1 }}>
                        <MainLayout/>
                    </SafeAreaView>
                </I18nextProvider>
            </ThemeProvider>
        </SafeAreaProvider>
    );
};

const AppWithStore: React.FC = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

export default AppWithStore;
