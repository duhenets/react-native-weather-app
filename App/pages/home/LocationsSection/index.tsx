import React from 'react';
import { searchLocation } from 'store/weather/thunk';
import { FlatList, ListRenderItem } from 'react-native';
import { TSearchLocation } from 'api/requests/Weather/types';
import { getWeatherSearchLocations } from 'store/weather/selectors';
import { StRefreshControl } from 'components/_common/Refresh/styled';
import { useApplicationDispatch, useApplicationSelector } from 'store/hooks';
import LocationItem from './LocationItem';

const keyExtractor = (location: TSearchLocation) => location.id.toString();

const renderItem: ListRenderItem<TSearchLocation> = ({ item, index }) => (
    <LocationItem
        first={index === 0}
        location={item}
    />
);

const LocationsSection: React.FC = () => {
    const dispatch = useApplicationDispatch();
    const [refreshing, setRefreshing] = React.useState(false);
    const locations = useApplicationSelector(getWeatherSearchLocations);

    const handleRefresh = async () => {
        try {
            setRefreshing(true);
            await dispatch(searchLocation(true));
            setRefreshing(false);
        } catch {
            setRefreshing(false);
        }
    };

    return (
        <FlatList
            data={locations}
            keyExtractor={keyExtractor}
            refreshControl={(
                <StRefreshControl
                    onRefresh={handleRefresh}
                    refreshing={refreshing}
                />
            )}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        />
    );
};

export default LocationsSection;
