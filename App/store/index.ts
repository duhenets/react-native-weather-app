import { configureStore } from '@reduxjs/toolkit';
import themesSlice from './themes/reducer';

const store = configureStore({
    reducer: {
        [themesSlice.name]: themesSlice.reducer,
    },
});

export type TApplicationState = ReturnType<typeof store.getState>;

export default store;
