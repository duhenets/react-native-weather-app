import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

export const hp = (percent: number) => Math.round(heightPercentageToDP(percent));

export const wp = (percent: number) => Math.round(widthPercentageToDP(percent));

export const fontSize = Math.round(hp(2));

export const smallestFontSize = Math.round(hp(1.25));

export const smallFontSize = Math.round(hp(1.5));

export const largeFontSize = Math.round(hp(2.5));

export const headerFontSize = Math.round(hp(5));

export const biggestFontSize = Math.round(hp(10));

export const indent = Math.round(wp(5));
