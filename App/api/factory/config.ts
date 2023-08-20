export enum API {
    WEATHER_API = 'weather_api',
}

export type TApiConfigItem = {
    api_key: string;
    prefix: string;
};

export type TApiConfig = Record<API, TApiConfigItem>;

export const apiConfig: TApiConfig = {
    [API.WEATHER_API]: {
        api_key: '4d34e91173d84d89a73134508232305',
        prefix: 'https://api.weatherapi.com/v1',
    },
};
