import React from 'react';
import { TextProps } from 'react-native';
import { StText } from './styled';

const Text: React.FC<TextProps> = (props) => <StText {...props}/>;

export default Text;
