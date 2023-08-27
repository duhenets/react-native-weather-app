import React from 'react';
import { StSearch } from './styled';
import SearchSection from './SearchSection';
import LocationsSection from './LocationsSection';

const Search: React.FC = () => (
    <StSearch>
        <LocationsSection/>
        <SearchSection/>
    </StSearch>
);

export default Search;
