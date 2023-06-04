import { configureStore } from "@reduxjs/toolkit";
import categories from "./slices/categoriesSlice";
import sort from "./slices/sortSlice";
import pizzas from "./slices/pizzasSlice";

const store = configureStore({
    reducer: {
        categories,
        sort,
        // pizzas
    }
});


export default store;