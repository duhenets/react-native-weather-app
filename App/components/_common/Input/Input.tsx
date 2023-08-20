import React from 'react';
import { useTranslation } from 'react-i18next';
import type { TTranslationKeys } from 'locales/en';
import { StInput } from './styled';

export type TInputProps = {
    value: string;
    disabled?: boolean;
    placeholder?: TTranslationKeys;
    onChange: (value: string) => void;
};

const Input: React.FC<TInputProps> = ({
    placeholder = 'default_placeholder',
    disabled,
    onChange,
    value,
}) => {
    const { t } = useTranslation();

    const disabledProps = React.useMemo(() => (
        disabled ? { editable: false, selectTextOnFocus: false, contextMenuHidden: true } : {}
    ), [disabled]);

    return (
        <StInput
            {...disabledProps}
            onChangeText={onChange}
            placeholder={t(`translation:${placeholder}`)}
            value={value}
        />
    );
};

export default Input;
