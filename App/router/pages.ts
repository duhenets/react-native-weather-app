export enum PAGES {
    HOME = 'home',
    WEATHER = 'weather',
    NOT_FOUND = 'not_found',
}

export type TPage = {
    path: string;
};

export type TPagesConfig = Record<PAGES, TPage>;

export const PAGES_CONFIG: TPagesConfig = {
    [PAGES.HOME]: { path: '/' },
    [PAGES.WEATHER]: { path: '/weather/:id' },
    [PAGES.NOT_FOUND]: { path: '/404' },
};
