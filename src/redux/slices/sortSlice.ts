import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { sortCategory } from "../../@types/types";



interface sortSliceState {
    currentSort: number,
    sortCategory: sortCategory[],
    isOpen: boolean,
    currentCategory: number,
    searchInputValue: string
}

const initialState: sortSliceState = {
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
        setCurrentSort: (state, action: PayloadAction<number>) => {
            state.currentSort = action.payload;
        },
        setIsOpen: (state, action: PayloadAction<boolean | undefined>) => {
            if (action.payload || action.payload === false) {
                state.isOpen = action.payload
            } else {
                state.isOpen = !state.isOpen;
            }
        },
        setActiveCategories: (state, action: PayloadAction<number>) => {
            state.currentCategory = action.payload;
        },
        setSearchInputValue: (state, action: PayloadAction<string>) => {
            state.searchInputValue = action.payload;
        },
        setParams: (state, action: PayloadAction<{category?: number, sort?: number, search?: string}>) => {
            const { category = 0, sort = 0, search = '' } = action.payload;
            state.currentCategory = Number(category);
            state.currentSort = Number(sort);
            state.searchInputValue = search;
        }
    }
});

export const { setCurrentSort, setIsOpen, setActiveCategories, setSearchInputValue, setParams } = sortSlice.actions;

export default sortSlice.reducer;