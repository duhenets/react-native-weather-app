import React from 'react';
import { TextProps } from 'react-native';
import { StText, TStTextProps } from './styled';

const Text: React.FC<TextProps & TStTextProps> = (props) => <StText {...props}/>;

export default Text;
