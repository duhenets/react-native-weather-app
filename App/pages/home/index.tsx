import React from 'react';
import Loader from 'components/_common/Loader';
import { useApplicationSelector } from 'store/hooks';
import { getWeatherSearchIsLoading } from 'store/weather/selectors';
import LocationsSection from './LocationsSection';
import SearchSection from './SearchSection';
import { StSearch } from './styled';

const Search: React.FC = () => {
    const isLoading = useApplicationSelector(getWeatherSearchIsLoading);

    return (
        <StSearch>
            {isLoading ? <Loader/> : <LocationsSection/>}
            <SearchSection/>
        </StSearch>
    );
};

export default Search;
