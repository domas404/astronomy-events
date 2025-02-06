import { configureStore } from '@reduxjs/toolkit';
import { nasaApi } from './features/nasaApi';
import { locationApi } from './features/locationApi';
import { astronomyApi } from './features/astronomyApi';

export const makeStore = () => {
    return configureStore({
        reducer: {
            [nasaApi.reducerPath]: nasaApi.reducer,
            [locationApi.reducerPath]: locationApi.reducer,
            [astronomyApi.reducerPath]: astronomyApi.reducer
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(nasaApi.middleware)
                .concat(locationApi.middleware)
                .concat(astronomyApi.middleware),
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']