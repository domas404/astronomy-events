import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LocationState {
    latitude: number | null,
    longitude: number | null
}

const initialState: LocationState = {
    latitude: 54.42,
    longitude: 25.16
}
export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        updateLocation: (state, action: PayloadAction<{ latitude: number, longitude: number }>) => {
            state.latitude = action.payload.latitude;
            state.longitude = action.payload.longitude;
        }
    }
});

export const { updateLocation } = locationSlice.actions;
export default locationSlice.reducer;