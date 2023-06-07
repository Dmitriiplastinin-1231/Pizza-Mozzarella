import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentSort: 0,
    sortCategory: [{ name: 'rating', viewName: 'популярности' },
    { name: 'price', viewName: 'цене' },
    { name: 'title', viewName: 'алфавиту' }],
    isOpen: false,
    currentCategory: 0,
    searchInputValue: '',
};

const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        setCurrentSort: (state, action) => {
            state.currentSort = action.payload;
        },
        setIsOpen: (state) => {
            state.isOpen = !state.isOpen;
        },
        setActiveCategories: (state, action) => {
            state.currentCategory = action.payload;
        },
        setSearchInputValue: (state, action) => {
            state.searchInputValue = action.payload;
        },
        setParams: (state, action) => {
            const { category = 0, sort = 0, search = '' } = action.payload;
            state.currentCategory = Number(category);
            state.currentSort = Number(sort);
            state.searchInputValue = search;
        }
    }
});

export const { setCurrentSort, setIsOpen, setActiveCategories, setSearchInputValue, setParams } = sortSlice.actions;

export default sortSlice.reducer;