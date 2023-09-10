import Base from 'api/factory/Base';
import * as Types from './types';

export default class WeatherAPI extends Base {
    async getCurrentWeather({ query }: Types.TGetCurrentWeatherRequest) {
        await new Promise(resolve => {
            setTimeout(() => {
                resolve(true);
            }, 1000);
        });

        return this.apiClient.get<Types.TGetCurrentWeatherResponse>('/current.json', { q: query });
    }

    async searchLocation({ query }: Types.TSearchLocationRequest) {
        await new Promise(resolve => {
            setTimeout(() => {
                resolve(true);
            }, 1000);
        });

        return this.apiClient.get<Types.TSearchLocationResponse>('/search.json', { q: query });
    }
}
