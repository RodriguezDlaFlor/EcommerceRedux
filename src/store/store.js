import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../Slices/SliceProducts";
import shoppingReducer from "../Slices/SliceShopping";

const store = configureStore({
  reducer: {
    products: productsReducer,
    shopping: shoppingReducer,
  },
});

export default store;
