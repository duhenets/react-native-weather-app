import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { searchLocation } from './thunk';
import * as Types from './types';

const initialState: Types.TWeatherState = {
    search: {
        query: '',
        locations: [],
        isLoading: false,
    },
};

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        changeSearchQuery: (state, action: PayloadAction<string>) => {
            state.search.query = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchLocation.pending, (state, action) => {
                state.search.isLoading = !action.meta.arg;
            })
            .addCase(searchLocation.rejected, (state) => {
                state.search.isLoading = false;
            })
            .addCase(searchLocation.fulfilled, (state, action) => {
                state.search.locations = action.payload;
                state.search.isLoading = false;
            });
    },
});

export const {
    changeSearchQuery,
} = weatherSlice.actions;

export default weatherSlice;
