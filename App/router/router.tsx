import Home from 'pages/home';
import Weather from 'pages/weather';
import { createMemoryRouter } from 'react-router-native';
import ErrorBoundary from 'components/ErrorBoundary';
import Error from 'components/Error';
import { PAGES_CONFIG } from './pages';
import App from '../app';

export const router = createMemoryRouter([
    {
        Component: App,
        path: PAGES_CONFIG.home.path,
        ErrorBoundary,
        children: [
            { index: true, Component: Home, ErrorBoundary },
            { path: PAGES_CONFIG.weather.path, Component: Weather, ErrorBoundary },
            { path: '*', Component: Error, ErrorBoundary },
        ],
    },
    { path: '*', Component: Error, ErrorBoundary },
]);
