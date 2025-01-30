import { configureStore } from '@reduxjs/toolkit';
import { cometApi } from './features/cometApi';

export const makeStore = () => {
    return configureStore({
        reducer: {
            [cometApi.reducerPath]: cometApi.reducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(cometApi.middleware),
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']