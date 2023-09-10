import React from 'react';
import { ActivityIndicatorProps } from 'react-native';
import { StLoader } from './styled';

export type TProps = ActivityIndicatorProps;

const Loader: React.FC<TProps> = ({ size = 'large', ...props }) => <StLoader {...props} size={size}/>;

export default Loader;
