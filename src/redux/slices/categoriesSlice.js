import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentCategory: 0
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setActiveCategories: (state, action) => {
            state.currentCategory = action.payload;
        }
    }
});

export const { setActiveCategories } = categoriesSlice.actions

export default categoriesSlice.reducer;
