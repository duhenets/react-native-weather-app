import React from 'react';
import Input from 'components/_common/Input';
import Button from 'components/_common/Button';
import { searchLocation } from 'store/weather/thunk';
import { changeSearchQuery } from 'store/weather/slice';
import { useApplicationDispatch, useApplicationSelector } from 'store/hooks';
import { getWeatherSearchIsLoading, getWeatherSearchQuery } from 'store/weather/selectors';
import { StSearch } from './styled';

const Search: React.FC = () => {
    const dispatch = useApplicationDispatch();
    const query = useApplicationSelector(getWeatherSearchQuery);
    const isLoading = useApplicationSelector(getWeatherSearchIsLoading);
    const onChange = (value: string) => dispatch(changeSearchQuery(value));
    const onPress = () => dispatch(searchLocation());

    return (
        <StSearch>
            <Input disabled={isLoading} onChange={onChange} placeholder="placeholder_city" value={query}/>
            <Button disabled={isLoading} onPress={onPress} title={isLoading ? 'loading' : 'search'}/>
        </StSearch>
    );
};

export default Search;
