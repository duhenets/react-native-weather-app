import React from 'react';
import { useTranslation } from 'react-i18next';
import { StWeatherError, StWeatherErrorText } from './styled';

const Error: React.FC = () => {
    const { t } = useTranslation();

    return (
        <StWeatherError>
            <StWeatherErrorText>
                {t('translation:something_went_wrong_message')}
            </StWeatherErrorText>
        </StWeatherError>
    );
};

export default Error;
