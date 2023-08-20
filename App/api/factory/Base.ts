import { IApiClient } from './types';

export default class Base {
    apiClient: IApiClient;

    constructor({ apiClient }: { apiClient: IApiClient }) {
        if (!apiClient) throw new Error('[apiClient] required');
        this.apiClient = apiClient;
    }
}
