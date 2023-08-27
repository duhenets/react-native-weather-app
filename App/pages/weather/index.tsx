import React from 'react';
import { View } from 'react-native';
import { useParams } from 'react-router';
import Text from 'components/_common/Text';

const Weather: React.FC = () => {
    const { id } = useParams();

    return (
        <View>
            <Text>Weather</Text>
            <Text>{id}</Text>
        </View>
    );
};

export default Weather;
