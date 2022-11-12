import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../Slices/SliceProducts";
import shoppingReducer from "../Slices/SliceShopping";
import checkoutReducer from "../Slices/SliceCheckout";

const store = configureStore({
  reducer: {
    products: productsReducer,
    shopping: shoppingReducer,
    checkout: checkoutReducer,
  },
});

export default store;
