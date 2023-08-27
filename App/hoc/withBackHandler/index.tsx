import React from 'react';
import { PAGES_CONFIG } from 'router/pages';
import { Alert, BackHandler } from 'react-native';
import { useLocation, useNavigate } from 'react-router';

// eslint-disable-next-line @typescript-eslint/ban-types
export type TWithBackHandlerProps<T = unknown> = T & {};

// eslint-disable-next-line @typescript-eslint/ban-types
export type TComponentProps<T = unknown> = T & {};

// eslint-disable-next-line react/display-name,@typescript-eslint/comma-dangle
const withBackHandler = <T, >(Component: React.FC<TWithBackHandlerProps<T>>) => (
    props: TComponentProps<Omit<T, keyof TWithBackHandlerProps>>,
) => {
    const location = useLocation();
    const navigate = useNavigate();

    React.useEffect(() => {
        const backAction = () => {
            if (location.pathname !== PAGES_CONFIG.home.path) {
                navigate(-1);
            } else {
                Alert.alert('Exit', 'Are you sure you want to exit?', [
                    { text: 'Cancel', style: 'cancel', onPress: () => null },
                    { text: 'YES', onPress: () => BackHandler.exitApp() },
                ]);
            }

            return true;
        };

        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

        return () => backHandler.remove();
    }, [location]);

    return <Component {...props as T}/>;
};

export default withBackHandler;
