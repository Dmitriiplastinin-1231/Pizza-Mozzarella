import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentSort: 0,
    isOpen: false
}

const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setCurrentSort: (state, action) => {
            state.currentSort = action.payload;
        },
        setIsOpen: (state) => {
            state.isOpen = !state.isOpen;
        }
    }
})

export const { setCurrentSort, setIsOpen } = sortSlice.actions;

export default sortSlice.reducer;