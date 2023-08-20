import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

export const hp = (percent: number) => Math.round(heightPercentageToDP(percent));

export const wp = (percent: number) => Math.round(widthPercentageToDP(percent));

export const fontSize = hp(2);

export const smallFontSize = hp(2);

export const largeFontSize = hp(6);

export const indent = Math.round(wp(5));
