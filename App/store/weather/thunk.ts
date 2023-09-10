import api from 'api';
import { TError } from 'api/factory/types';
import { createAsyncThunk } from 'store/thunk';
import { getWeatherSearchQuery } from 'store/weather/selectors';
import { TGetCurrentWeatherRequest } from 'api/requests/Weather/types';

export const searchLocation = createAsyncThunk(
    'weather/searchLocation',
    async (_: boolean, thunk) => {
        try {
            const query = getWeatherSearchQuery(thunk.getState());
            const { data } = await api.weatherApi.searchLocation({ query });

            return data;
        } catch (error) {
            return thunk.rejectWithValue(error as TError);
        }
    },
);

export const getCurrentWeather = createAsyncThunk(
    'weather/getCurrentWeather',
    async ({ query }: TGetCurrentWeatherRequest, thunk) => {
        try {
            const { data } = await api.weatherApi.getCurrentWeather({ query });

            return data;
        } catch (error) {
            return thunk.rejectWithValue(error as TError);
        }
    },
);
