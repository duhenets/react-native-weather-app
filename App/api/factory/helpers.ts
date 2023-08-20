import { TAnyObject, TRequestData, TRequestInfo } from 'api/factory/types';

export const isString = (value: unknown): value is string => typeof value === 'string';

export const isObject = (value: unknown): value is object => typeof value === 'object' && !Array.isArray(value) && value !== null;

export const deleteEmptyField = (obj: TAnyObject) => (
    Object.keys(obj).reduce((acc, curr) => {
        if (obj[curr] === undefined || obj[curr] === null) return { ...acc };

        return { ...acc, [curr]: obj[curr] };
    }, {})
);

export const getRequestData = (info: TRequestInfo): TRequestData => {
    const searchParams = isObject(info.params) ? new URLSearchParams(deleteEmptyField(info.params)).toString() : '';
    const url = searchParams ? `${info.url}?${searchParams}` : info.url;

    const config: RequestInit = {
        method: info.method,
        credentials: 'omit',
        body: info.body ? JSON.stringify(info.body) : undefined,
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
    };

    return { url, config };
};

export const isJson = (headers: Headers) => !!headers?.get?.('content-type')?.includes?.('application/json');

export const getErrorMessage = (errors: string | Array<string>): string => (
    Array.isArray(errors) && errors.every(isString)
        ? errors.join('. ')
        : isString(errors)
            ? errors.trim()
            : ''
);
