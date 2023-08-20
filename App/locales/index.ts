import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en';

i18n
    .use(initReactI18next)
    .init({
        lng: 'en',
        debug: false,
        resources: { en },
        fallbackLng: 'en',
        keySeparator: false,
        compatibilityJSON: 'v3',
        react: { useSuspense: true },
        interpolation: { escapeValue: false },
        defaultNS: 'translation',
        ns: ['translation'],
    });

export const t = i18n.t.bind(i18n);

export default i18n;
