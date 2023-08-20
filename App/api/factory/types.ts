export type TAnyObject<Value = any> = Record<string, Value>;

export enum HTTP_METHODS {
    GET = 'GET',
    PUT = 'PUT',
    POST = 'POST',
    DELETE = 'DELETE',
}

export type TRequestData = {
    url: string;
    config: RequestInit;
};

export type TRequestInfo = {
    url: string;
    body?: TAnyObject;
    params?: TAnyObject;
    method: HTTP_METHODS;
};

export type TData<T = unknown> = { data: T };

export interface IApiClient {
    prefix: string;
    get: <T = unknown>(url: string, payload?: TAnyObject) => Promise<TData<T>>;
    put: <T = unknown>(url: string, payload?: TAnyObject) => Promise<TData<T>>;
    post: <T = unknown>(url: string, payload?: TAnyObject) => Promise<TData<T>>;
    delete: <T = unknown>(url: string, payload?: TAnyObject) => Promise<TData<T>>;
}

export type TError = {
    data?: {
        text?: string;
        type?: string;
        message?: string;
        errors?: Array<string>;
        dynamic_codes_versions?: string;
    };
    error: {
        status?: string;
        message?: string;
        statusCode?: number;
    };
};
