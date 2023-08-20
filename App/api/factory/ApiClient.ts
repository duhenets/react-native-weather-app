import { getErrorMessage, getRequestData, isJson } from 'api/factory/helpers';
import { HTTP_METHODS, IApiClient, TData, TError, TRequestInfo } from 'api/factory/types';
import { DEFAULT_ERROR_MESSAGE, PLEASE_TRY_AGAIN_500, SOMETHING_WENT_WRONG } from 'api/factory/constants';

const getMessage = (json: any, error: any) => {
    if (error?.status >= 500) return PLEASE_TRY_AGAIN_500;
    const errors = json?.error?.message || json?.errors || json?.error || json?.message;

    return getErrorMessage(errors)
        || (error instanceof Error ? SOMETHING_WENT_WRONG : DEFAULT_ERROR_MESSAGE);
};

const request = async <T>(info: TRequestInfo): Promise<TData<T>> => {
    try {
        const { url, config } = getRequestData(info);
        const response = await fetch(url, config);

        if (!response.ok) throw response;

        const json = isJson(response.headers)
            ? await response.json()
            : undefined;

        const data = json?.data ? json.data : json;

        return { data };
    } catch (error: any) {
        const json = isJson(error?.headers) ? await error.json() : undefined;
        // eslint-disable-next-line no-throw-literal
        throw {
            data: json,
            error: {
                status: 'error',
                statusCode: error?.status || 500,
                message: getMessage(json, error),
            },
        } as TError;
    }
};

export default class ApiClient implements IApiClient {
    prefix: string;

    key: string;

    constructor({ prefix = '', key = '' } = {}) {
        this.prefix = prefix;
        this.key = key;
    }

    async get<T = unknown>(url: string, payload = {}) {
        return request<T>({
            url: `${this.prefix}${url}`,
            method: HTTP_METHODS.GET,
            params: { ...payload, key: this.key },
        });
    }

    async put<T = unknown>(url: string, payload = {}) {
        return request<T>({
            url: `${this.prefix}${url}`,
            method: HTTP_METHODS.PUT,
            body: { ...payload, key: this.key },
        });
    }

    async post<T = unknown>(url: string, payload = {}) {
        return request<T>({
            url: `${this.prefix}${url}`,
            method: HTTP_METHODS.POST,
            body: { ...payload, key: this.key },
        });
    }

    async delete<T = unknown>(url: string, payload = {}) {
        return request<T>({
            url: `${this.prefix}${url}`,
            method: HTTP_METHODS.DELETE,
            body: { ...payload, key: this.key },
        });
    }
}
