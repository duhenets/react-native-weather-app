// getCurrentWeather
export type TLocation = {
    id: number;
    name: string;
    region: string;
    country: string;
};

export type TCondition = {
    text: string;
};

export type TCurrent = {
    condition: TCondition;
    temp_c: number;
};

export type TGetCurrentWeatherRequest = {
    city: string;
};

export type TGetCurrentWeatherResponse = {
    location: TLocation;
    current: TCurrent;
};
// getCurrentWeather

// searchLocation
export type TSearchLocationRequest = {
    query: string;
};

export type TSearchLocationResponse = Array<TLocation>;
// searchLocation
