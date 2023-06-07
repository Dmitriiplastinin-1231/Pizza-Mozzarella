import { configureStore } from "@reduxjs/toolkit";
import sort from "./slices/sortSlice";
import pizzas from "./slices/pizzasSlice";
import cart from "./slices/cartSlice";

const store = configureStore({
    reducer: {
        sort,
        pizzas,
        cart
    },
});


export default store;