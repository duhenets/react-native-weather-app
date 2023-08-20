import { createSelector } from 'reselect';
import { TApplicationState } from 'store';
import { TLocation } from 'api/requests/Weather/types';
import * as Types from './types';

export const getWeatherState = (state: TApplicationState): Types.TWeatherState => state.weather;

export const getWeatherSearchState = createSelector(
    getWeatherState,
    (weather): Types.TSearchState => weather.search,
);

export const getWeatherSearchQuery = createSelector(
    getWeatherSearchState,
    (search): string => search.query,
);

export const getWeatherSearchLocations = createSelector(
    getWeatherSearchState,
    (search): Array<TLocation> => search.locations,
);

export const getWeatherSearchIsLoading = createSelector(
    getWeatherSearchState,
    (search): boolean => search.isLoading,
);
