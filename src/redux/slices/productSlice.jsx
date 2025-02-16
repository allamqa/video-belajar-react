import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: JSON.parse(localStorage.getItem("product")) || [],
    
};

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        addProduct: (state, action) => {
           // Generate new ID by finding the highest existing ID and adding 1
           const maxId = state.product.length > 0 
             ? Math.max(...state.product.map(p => p.id)) 
             : 0;
           const newProduct = {
             ...action.payload,
             id: maxId + 1
           };
           state.product.push(newProduct);
           localStorage.setItem("product", JSON.stringify(state.product));
          },
         
    },
    
})


export const {addProduct} = productSlice.actions;
export default productSlice.reducer
