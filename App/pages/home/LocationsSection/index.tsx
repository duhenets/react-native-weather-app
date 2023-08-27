import React from 'react';
import { useApplicationSelector } from 'store/hooks';
import { TLocation } from 'api/requests/Weather/types';
import { FlatList, ListRenderItem } from 'react-native';
import { getWeatherSearchLocations } from 'store/weather/selectors';
import LocationItem from './LocationItem';

const keyExtractor = (location: TLocation) => location.id.toString();

const renderItem: ListRenderItem<TLocation> = ({ item, index }) => <LocationItem first={index === 0} location={item}/>;

const LocationsSection: React.FC = () => {
    const locations = useApplicationSelector(getWeatherSearchLocations);

    return (
        <FlatList
            data={locations}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        />
    );
};

export default LocationsSection;
