import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme: () => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme;
    }
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme(state, action) {
            state.theme = action.payload === "dark"? "light" : "dark";
            localStorage.setItem("theme", state.theme);
        }

    }
});

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;