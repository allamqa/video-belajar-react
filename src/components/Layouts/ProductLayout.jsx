

import {  useRef, useState } from "react";
import { addDataProduct, fetchSingleData, updateProduct } from "../../service/products.service";
import FormProduct from "../Fragments/FormProduct";
import ProductList from "../Fragments/ProductList";
import Sidebar from "../Fragments/Sidebar";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/slices/productSlice";



const ProductLayout = () => {
 
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
      const [product,setProduct] = useState({
        id: null,
             title:'',
             price:'',
             thumbnail:'',
             description:'',
         });

         const form = useRef(null);

        
   

     const getDataById =  (id) => {
        const fetchProductData = async () => {
            try {
              const response = await fetchSingleData(id);
              setProduct(response.data);
              setIsEdit(true);
              console.log(response.data)
            } catch (error) {
              console.error(error);
            } 
          };
          fetchProductData();
             }

             
             const handleInputChange = (e) => {
                const { name, value } = e.target;
                const updatedInput = { ...product, [name]: value };
                setProduct(updatedInput);
              };

              const handleUpdate = async (e,id) => {
                e.preventDefault();
                console.log('Data being sent:', product);
                try {
                    const response = await updateProduct(id, { product });
                    setIsEdit(false);
                    console.log(response.data);
                
                    alert('Product updated successfully!');
                    
                } catch (err) {
                    console.error(err);
                    alert('Error updating product: ' + err.message);
                }
            }

            const handleSubmit = async (e) => {
              e.preventDefault();
              console.log(product.id);
              try {
                const response = await addDataProduct(product);
                dispatch(addProduct(response));
                console.log(response)
                alert('Data berhasil ditambahkan!');
               
               
              } catch (err) {
                console.error(err);
                alert('Error menambahkan data: ' + err.message);
              }

              form.current.reset();
            };

            
            

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
                   <Sidebar></Sidebar>
                    <main className="w-full md:w-3/4 p-4 md:p-8">
                        <FormProduct form={form} handleSubmit={handleSubmit} isEdit={isEdit} product={product} handleInputChange={handleInputChange} handleUpdate={handleUpdate}></FormProduct>
                       <ProductList getDataById={getDataById}></ProductList>
                    </main>
                </div>
    );

       
}

export default ProductLayout;