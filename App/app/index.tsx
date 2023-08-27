import React from 'react';
import store from 'store';
import locales from 'locales';
import { Provider } from 'react-redux';
import MainLayout from 'components/MainLayout';
import { I18nextProvider } from 'react-i18next';
import withBackHandler from 'hoc/withBackHandler';
import { useApplicationSelector } from 'store/hooks';
import { getThemeValue } from 'store/themes/selectors';
import { ThemeProvider } from 'styled-components/native';
import { Edge, SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const EDGES: Array<Edge> = ['left', 'right', 'bottom'];

const App: React.FC = () => {
    const theme = useApplicationSelector(getThemeValue);

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

export default withBackHandler(AppWithStore);
