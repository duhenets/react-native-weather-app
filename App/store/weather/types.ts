import { TLocation } from 'api/requests/Weather/types';

export type TWeatherState = {
    search: TSearchState;
};

export type TSearchState = {
    query: string;
    isLoading: boolean;
    locations: Array<TLocation>;
};
