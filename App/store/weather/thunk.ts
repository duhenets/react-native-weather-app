import api from 'api';
import { TError } from 'api/factory/types';
import { createAsyncThunk } from 'store/thunk';
import { getWeatherSearchQuery } from 'store/weather/selectors';

export const searchLocation = createAsyncThunk(
    'weather/searchLocation',
    async (_, thunk) => {
        try {
            const query = getWeatherSearchQuery(thunk.getState());
            const { data } = await api.weatherApi.searchLocation({ query });

            return data;
        } catch (error) {
            return thunk.rejectWithValue(error as TError);
        }
    },
);
