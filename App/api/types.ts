import api from './factory';

export type TClass = keyof typeof api;

export type TMethod = keyof Omit<typeof api[keyof typeof api], 'apiClient'>;

export type TApiPath = [TClass, TMethod];

export type TApiData<Path = TApiPath> = Path extends TApiPath ? Parameters<typeof api[Path[0]][Path[1]]>[0] : unknown;

export type TApiResponse<Path = TApiPath> = Path extends TApiPath ? ReturnType<typeof api[Path[0]][Path[1]]> : unknown;
