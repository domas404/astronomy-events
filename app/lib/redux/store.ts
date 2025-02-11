import { configureStore } from '@reduxjs/toolkit';
import { nasaApi } from './features/nasaApi';
import { astronomyApi } from './features/astronomyApi';
import locationReducer from './features/locationSlice';
import languageSlice from './features/languageSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            [nasaApi.reducerPath]: nasaApi.reducer,
            [astronomyApi.reducerPath]: astronomyApi.reducer,
            location: locationReducer,
            language: languageSlice
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(nasaApi.middleware)
                .concat(astronomyApi.middleware),
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']