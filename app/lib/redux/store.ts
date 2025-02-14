import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './features/locationSlice';
import languageSlice from './features/languageSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            location: locationReducer,
            language: languageSlice
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware(),
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']