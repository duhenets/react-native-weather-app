import React from 'react';
import Text from 'components/_common/Text';
import { useNavigate } from 'react-router';
import { PAGES_CONFIG } from 'router/pages';
import { TTranslationKeys } from 'locales/en';
import Button from 'components/_common/Button';
import { useTranslation } from 'react-i18next';
import { StError, StErrorText } from './styled';

export type TProps = {
    statusCode?: number;
    message?: TTranslationKeys;
};

const Error: React.FC<TProps> = ({ statusCode = 404, message = 'page_not_found' }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const handlePress = () => navigate(PAGES_CONFIG.home.path);

    return (
        <>
            <StError>
                <StErrorText>{statusCode}</StErrorText>
                <Text $uppercase>{t(`translation:${message}`)}</Text>
            </StError>
            <Button margin="auto 0 0" onPress={handlePress} title="go_home"/>
        </>
    );
};

export default Error;
