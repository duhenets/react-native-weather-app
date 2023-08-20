import Base from 'api/factory/Base';
import * as Types from './types';

export default class WeatherAPI extends Base {
    getCurrentWeather({ city }: Types.TGetCurrentWeatherRequest) {
        return this.apiClient.get<Types.TGetCurrentWeatherResponse>('/current.json', { q: city });
    }

    searchLocation({ query }: Types.TSearchLocationRequest) {
        return this.apiClient.get<Types.TSearchLocationResponse>('/search.json', { q: query });
    }
}
