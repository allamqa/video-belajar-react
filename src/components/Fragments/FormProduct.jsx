import { useState } from "react";
import InputFormAdmin from "../Elements/Input/Admin/InputFormAdmin";
import TextArea from "../Elements/Input/Admin/TextArea";

const FormProduct = ({product,handleUpdate,handleInputChange,isEdit,handleSubmit,descriptionRef}) =>{
  

  

    return(
      
        <section className="bg-white p-6 rounded shadow-md mb-8">
          {(isEdit == true) ?
          <> 
          <form onSubmit={e => handleUpdate(e,product.id)}>
          <h2 className="text-xl font-bold mb-4">Update Product</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <InputFormAdmin type="text" name="title" handleInputChange={handleInputChange} value={product.title} label="Title" />
                 
                
                <InputFormAdmin label="Price" type="text" name="price" handleInputChange={handleInputChange} value={product.price}/>
                
                
                <InputFormAdmin label="Image Url" type="text" name="thumbnail" handleInputChange={handleInputChange}  value={product.thumbnail}/>
                 
              </div>
              <div className="mb-4">
             
             <TextArea label="Description" name="description" handleInputChange={handleInputChange} value={product.description}/>
         
         </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update Product</button>
          </form>
          </>
           : 
           <>
          <form onSubmit={handleSubmit} >
          <h2 className="text-xl font-bold mb-4">Create New Product</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <InputFormAdmin type="text" name="title" handleInputChange={handleInputChange}  label="Title" />
                 
                
                <InputFormAdmin label="Price" type="text" name="price" handleInputChange={handleInputChange} />
                
                
                <InputFormAdmin label="Image Url" type="text" name="thumbnail" handleInputChange={handleInputChange}  />
                 
              </div>
              <div className="mb-4">
             
                  <TextArea label="Description" name="description" handleInputChange={handleInputChange}  />
              
              </div>
              <button  type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Product</button>
          </form>
          </>
          }
        
                            
                        </section>
    );
}

export default FormProduct;