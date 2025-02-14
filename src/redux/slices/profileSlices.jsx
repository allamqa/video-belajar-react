import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name:"profile",
    initialState:{
        data: JSON.parse(localStorage.getItem("profile")) || {},
    },reducers:{
        addToProfile: (state, action) => {
            state.data = { ...state.data, ...action.payload };
          },
          updateToProfile: (state, action) => {
            state.data = { ...state.data, ...action.payload };
          },
    },
    
})

export const {addToProfile,updateToProfile} = profileSlice.actions;
export default profileSlice.reducer

