import React from 'react';
import { useNavigate } from 'react-router';
import { PAGES_CONFIG } from 'router/pages';
import { TLocation } from 'api/requests/Weather/types';
import {
    StLocation,
    StLocationGo,
    StLocationGoIcon,
    StLocationInfo,
    StLocationName,
    StLocationRegion,
} from './styled';

export type TProps = {
    location: TLocation;
    first?: boolean;
};

const LocationItem: React.FC<TProps> = ({ first, location }) => {
    const navigate = useNavigate();
    const handlePress = () => navigate(PAGES_CONFIG.weather.path.replace(':id', `${location.id}`));

    return (
        <StLocation key={location.id} $first={first}>
            <StLocationInfo>
                <StLocationName>{location.name}</StLocationName>
                <StLocationRegion>{`${location.region}, ${location.country}`}</StLocationRegion>
            </StLocationInfo>
            <StLocationGo onPress={handlePress}>
                <StLocationGoIcon height="50%" width="50%"/>
            </StLocationGo>
        </StLocation>
    );
};

export default LocationItem;
