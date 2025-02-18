import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./slices/profileSlices";
import productReducer from "./slices/productSlice";


const store = configureStore({
    reducer: {product:productReducer,profile:profileReducer},
});

store.subscribe(() => {
    console.log("Store changed:", store.getState());
  });

export default store;