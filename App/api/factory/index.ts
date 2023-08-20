import { apiConfig } from 'api/factory/config';
import apiFactory from './factory';

export default apiFactory({
    weather_api: apiConfig.weather_api,
});
