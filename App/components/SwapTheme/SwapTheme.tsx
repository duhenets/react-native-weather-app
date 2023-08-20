import React from 'react';
import { swapTheme } from 'store/themes/slice';
import { getIsDarkTheme } from 'store/themes/selectors';
import { TouchableWithoutFeedback, Vibration } from 'react-native';
import { useApplicationDispatch, useApplicationSelector } from 'store/hooks';
import { StMoonIcon, StSunIcon, StSwapThemeArea, StSwapThemeImage, StSwapThemeView } from './styled';

const SwapTheme: React.FC = () => {
    const dispatch = useApplicationDispatch();
    const isDarkTheme = useApplicationSelector(getIsDarkTheme);

    const handleSwapTheme = () => {
        Vibration.vibrate(50);
        dispatch(swapTheme());
    };

    return (
        <StSwapThemeView>
            <StSwapThemeArea>
                <StSwapThemeImage>
                    <TouchableWithoutFeedback onPress={isDarkTheme ? handleSwapTheme : undefined}>
                        <StSunIcon $active={!isDarkTheme} height="100%" width="100%"/>
                    </TouchableWithoutFeedback>
                </StSwapThemeImage>
                <StSwapThemeImage>
                    <TouchableWithoutFeedback onPress={isDarkTheme ? undefined : handleSwapTheme}>
                        <StMoonIcon $active={isDarkTheme} height="100%" width="100%"/>
                    </TouchableWithoutFeedback>
                </StSwapThemeImage>
            </StSwapThemeArea>
        </StSwapThemeView>
    );
};

export default SwapTheme;
