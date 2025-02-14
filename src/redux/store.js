import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./slices/profileSlices";


const store = configureStore({
    reducer: {profile:profileReducer},
});

store.subscribe(() => {
    console.log("Store changed:", store.getState());
  });

export default store;