import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    product: JSON.parse(localStorage.getItem("product")) || [],
    
};

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        addProduct: (state, action) => {
          
           const maxId = state.product.length > 0 
             ? Math.max(...state.product.map(p => p.id)) 
             : 0;
           const newProduct = {
             id: maxId + 1,
             title: action.payload.title,
             price: action.payload.price,
             thumbnail: action.payload.thumbnail,
             description: action.payload.description
           };
           state.product.push(newProduct);
           localStorage.setItem("product", JSON.stringify(state.product));
          },
          editProduct : (state, action) => {
            const {id,title,price,thumbnail,description} = action.payload;
            const product = state.product.find((p) => p.id === id);
            if(product) {
              product.title = title;
              product.price = price;
              product.thumbnail = thumbnail;
              product.description = description;
              localStorage.setItem("product", JSON.stringify(state.product));
            }
          },

          deleteDataProduct: (state, action) => {
            const id = action.payload;
            state.product = state.product.filter((product) => product.id !== id);
            localStorage.setItem("product", JSON.stringify(state.product));
          }
        }
    })



export const {addProduct,editProduct,deleteDataProduct} = productSlice.actions;
export default productSlice.reducer
