import React from 'react';
import { swapTheme } from 'store/themes/reducer';
import { getIsDarkTheme } from 'store/themes/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableWithoutFeedback, Vibration } from 'react-native';
import { StMoonIcon, StSunIcon, StSwapThemeArea, StSwapThemeImage, StSwapThemeView } from './styled';

const SwapTheme: React.FC = () => {
    const dispatch = useDispatch();
    const isDarkTheme = useSelector(getIsDarkTheme);

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
