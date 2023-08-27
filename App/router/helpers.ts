import { router } from 'router/router';
import { To } from '@remix-run/router/history';
import { RouterNavigateOptions } from '@remix-run/router/router';

export const redirect = (path: To | null, options?: RouterNavigateOptions) => router.navigate(path, options);
