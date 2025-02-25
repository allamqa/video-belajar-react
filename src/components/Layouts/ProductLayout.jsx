

import {  useRef, useState } from "react";
import { addDataProduct, deleteProduct, fetchSingleData, updateProduct } from "../../service/products.service";
import FormProduct from "../Fragments/FormProduct";
import ProductList from "../Fragments/ProductList";
import Sidebar from "../Fragments/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, editProduct,deleteDataProduct } from "../../redux/slices/productSlice";
import { ToastContainer, toast } from 'react-toastify';



const ProductLayout = () => {
 const byId = useSelector((state) => state.product.product);
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

        
         const notifyAdd = () =>toast.success('Data Berhasil Ditambahkan!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        
          });

          
         const notifyUpdate = () =>toast.info('Data Berhasil Diedit!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
         
          });

          
         const notifyDelete = () =>toast.error('Data Berhasil Dihapus!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
     const getDataById =  (id) => {
        const fetchProductData = async () => {
            try {
              const response = await fetchSingleData(id);
              const productById = byId.find((p) => p.id === id);
              setProduct(productById);
              setIsEdit(true);
              console.log()
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
                try {
                    const response = await updateProduct(id, { product });
                    setIsEdit(false);
                    console.log(response.data);
                
                    notifyUpdate();
                    
                } catch (err) {
                    console.error(err);
                    alert('Error updating product: ' + err.message);
                }

                dispatch(editProduct({
                  id:id,
                  title:product.title,
                  price:product.price,
                  thumbnail:product.thumbnail,
                  description:product.description
                }))

                form.current.reset();
            }

            const handleSubmit = async (e) => {
              e.preventDefault();
              try {
                const response = await addDataProduct(product);
                dispatch(addProduct(response));
                console.log(response)
                notifyAdd();
               
               
              } catch (err) {
                console.error(err);
                alert('Error menambahkan data: ' + err.message);
              }
              
              form.current.reset();
            };

            const handleDelete = async (id) => {
              try {
                
                await deleteProduct(id);
                dispatch(deleteDataProduct(id))
                notifyDelete();
                
              } catch (error) {
                console.error('Failed to delete product:', error);
              }
            }
          
            

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
                   <Sidebar></Sidebar>
                    <main className="w-full md:w-3/4 p-4 md:p-8">
                        <FormProduct form={form} handleSubmit={handleSubmit} isEdit={isEdit} product={product} handleInputChange={handleInputChange} handleUpdate={handleUpdate}></FormProduct>
                         <ProductList getDataById={getDataById} handleDelete={handleDelete}></ProductList>
                         <ToastContainer />
                    </main>
                </div>
    );

       
}

export default ProductLayout;