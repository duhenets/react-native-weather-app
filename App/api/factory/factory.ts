import ApiClient from 'api/factory/ApiClient';
import { TApiConfig } from 'api/factory/config';
import WeatherAPI from 'api/requests/Weather/WeatherAPI';

export default function apiFactory({
    weather_api,
}: TApiConfig) {
    const weatherApi = new ApiClient({ prefix: weather_api.prefix, key: weather_api.api_key });

    return {
        weatherApi: new WeatherAPI({ apiClient: weatherApi }),
    };
}
