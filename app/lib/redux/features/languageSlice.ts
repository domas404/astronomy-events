import { createSlice } from "@reduxjs/toolkit";

// const loadFromLocalStorage = (key: string) => {
//     if (typeof window === 'undefined') return 'en';
//     try {
//         const serializedState = localStorage.getItem(key);
//         return serializedState ? JSON.parse(serializedState) : 'en';
//     } catch (e) {
//         console.warn('Error loading from localStorage', e);
//         return 'en';
//     }
// }

interface LanguageState {
    language: string,
}

const initialState: LanguageState = {
    language: 'en'
}
export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        changeLanguage: (state, action) => {
            state.language = action.payload;
            // localStorage.setItem('lang', JSON.stringify(action.payload));
        }
    }
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;