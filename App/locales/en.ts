const en = {
    translation: {
        tr_app_title: 'Weather App',
        default_placeholder: 'Enter something...',
        placeholder_city: 'Enter city name...',
        search: 'Search',
        back: 'Back',
        page_not_found: 'Oops! Page not found',
        go_home: 'Go Home',
        something_went_wrong: 'Oops! Something went wrong',
        local_time: 'Local time: {{time}}',
        something_went_wrong_message: 'Oops!\nSomething went wrong.\nPlease try again.',
    },
};

export type TTranslationKeys = keyof typeof en.translation;

export default en;
