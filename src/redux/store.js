import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./slices/productSlice";


const store = configureStore({
    reducer: {product:productReducer},
});

store.subscribe(() => {
    console.log("Store changed:", store.getState());
  });

export default store;