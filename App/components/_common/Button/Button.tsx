import React from 'react';
import { useTranslation } from 'react-i18next';
import type { TTranslationKeys } from 'locales/en';
import Text from 'components/_common/Text';
import { StButton, StTouchableHighlight } from './styled';

export type TButtonProps = {
    title: TTranslationKeys;
    onPress: () => void;
    disabled?: boolean;
};

const Button: React.FC<TButtonProps> = ({
    disabled,
    onPress,
    title,
}) => {
    const { t } = useTranslation();

    return (
        <StTouchableHighlight disabled={disabled} onPress={onPress}>
            <StButton>
                <Text $uppercase>{t(`translation:${title}`)}</Text>
            </StButton>
        </StTouchableHighlight>
    );
};

export default Button;
