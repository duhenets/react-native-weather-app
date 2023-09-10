import React from 'react';
import { useParams } from 'react-router';
import Loader from 'components/_common/Loader';
import Refresh from 'components/_common/Refresh';
import { useApplicationDispatch } from 'store/hooks';
import { getCurrentWeather } from 'store/weather/thunk';
import { TGetCurrentWeatherResponse } from 'api/requests/Weather/types';
import LocationInfo from './LocationInfo';
import CurrentInfo from './CurrentInfo';
import Error from './Error';

const initialState = {
    isLoading: true,
    refreshing: false,
    weather: null as TGetCurrentWeatherResponse,
};

const Weather: React.FC = () => {
    const { id } = useParams();
    const dispatch = useApplicationDispatch();
    const [state, setState] = React.useState<typeof initialState>(initialState);
    const { weather, refreshing, isLoading } = state;

    React.useEffect(() => {
        getWeather();
    }, []);

    const handleRefresh = () => getWeather(true);

    const getWeather = async (refresh?: boolean) => {
        const key: keyof typeof initialState = refresh ? 'refreshing' : 'isLoading';

        try {
            setState(prevState => ({ ...prevState, [key]: true }));

            const weather = await dispatch(getCurrentWeather({ query: id })).unwrap();
            setState(prevState => ({ ...prevState, weather, [key]: false }));
        } catch {
            setState(prevState => ({ ...prevState, [key]: false }));
        }
    };

    if (isLoading) return <Loader/>;

    return (
        <Refresh onRefresh={handleRefresh} refreshing={refreshing}>
            {weather
                ? (
                    <>
                        <CurrentInfo current={weather.current}/>
                        <LocationInfo location={weather.location}/>
                    </>
                )
                : <Error/>}
        </Refresh>
    );
};

export default Weather;
