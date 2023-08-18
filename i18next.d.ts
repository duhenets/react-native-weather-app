/* eslint-disable @typescript-eslint/naming-convention */
import en from 'locales/en';
import 'i18next';

declare module 'i18next' {
    interface CustomTypeOptions {
        defaultNS: 'translation';
        resources: { translation: typeof en.translation };
    }
}
