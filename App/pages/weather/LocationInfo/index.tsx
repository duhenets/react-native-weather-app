import React from 'react';
import { TLocation } from 'api/requests/Weather/types';
import {
    StLocationInfo,
    StLocationInfoCountry,
    StLocationInfoLocalTime,
    StLocationInfoName,
    StLocationInfoRegion,
    StLocationInfoRegionAndCountry,
} from './styled';

export type TProps = { location: TLocation };

const LocationInfo: React.FC<TProps> = ({ location }) => (
    <StLocationInfo>
        <StLocationInfoName>{location.name}</StLocationInfoName>
        <StLocationInfoRegionAndCountry>
            <StLocationInfoRegion>{`${location.region} | `}</StLocationInfoRegion>
            <StLocationInfoCountry>{location.country}</StLocationInfoCountry>
        </StLocationInfoRegionAndCountry>
        <StLocationInfoLocalTime>{location.localtime}</StLocationInfoLocalTime>
    </StLocationInfo>
);

export default LocationInfo;
