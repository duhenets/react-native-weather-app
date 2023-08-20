import { configureStore } from '@reduxjs/toolkit';
import weatherSlice from './weather/slice';
import themesSlice from './themes/slice';

const store = configureStore({
    reducer: {
        [weatherSlice.name]: weatherSlice.reducer,
        [themesSlice.name]: themesSlice.reducer,
    },
});

export type TApplicationState = ReturnType<typeof store.getState>;

export type TApplicationDispatch = typeof store.dispatch;

export default store;
