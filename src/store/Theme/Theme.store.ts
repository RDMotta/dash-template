import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    styleTheme: 'dark'
};

const themeReducer = createSlice({
    name: 'themeReducer',
    initialState,
    reducers: {
        style: (state) => {
            state.styleTheme = state.styleTheme === "light" ? "dark" : "light";            
        },
    }
})

export const { style } = themeReducer.actions;
export default themeReducer.reducer; 