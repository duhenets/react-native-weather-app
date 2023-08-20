import React from 'react';
import { View } from 'react-native';
import Text from 'components/_common/Text';
import { useApplicationSelector } from 'store/hooks';
import { getWeatherSearchLocations } from 'store/weather/selectors';
import { StResults } from './styled';

const Results: React.FC = () => {
    const locations = useApplicationSelector(getWeatherSearchLocations);

    return (
        <StResults>
            {locations.map((location) => (
                <View key={location.id}>
                    <Text>{location.name}</Text>
                    <Text>{location.region}</Text>
                    <Text>{location.country}</Text>
                </View>
            ))}
        </StResults>
    );
};

export default Results;
