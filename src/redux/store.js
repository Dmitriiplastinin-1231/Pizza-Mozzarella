import { configureStore } from "@reduxjs/toolkit";
import sort from "./slices/sortSlice";
import pizzas from "./slices/pizzasSlice"

const store = configureStore({
    reducer: {
        sort,
        pizzas,
    },
});


export default store;