import React from 'react';
import { useTranslation } from 'react-i18next';
import type { TTranslationKeys } from 'locales/en';
import Text from 'components/_common/Text';
import { StButton, StTouchableHighlight } from './styled';

export type TButtonProps = {
    title: TTranslationKeys;
    onPress: () => void;
    disabled?: boolean;
    margin?: string;
};

const Button: React.FC<TButtonProps> = ({
    disabled,
    onPress,
    margin,
    title,
}) => {
    const { t } = useTranslation();

    return (
        <StTouchableHighlight $margin={margin} disabled={disabled} onPress={onPress}>
            <StButton>
                <Text $uppercase>{t(`translation:${title}`)}</Text>
            </StButton>
        </StTouchableHighlight>
    );
};

export default Button;
