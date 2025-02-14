import InputFormAdmin from "../Elements/Input/Admin/InputFormAdmin";
import TextArea from "../Elements/Input/Admin/TextArea";
import { fetchSingleData, updateProduct } from "../../service/products.service";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const FormUpdateProduct = () => {
    const [newProduct,setNewProduct] = useState({
        title:'',
        price:'',
        thumbnail:'',
        description:''
    });
    const { id } = useParams();

    useEffect(() => {
        const fetchProductData = async () => {
          try {
            const response = await fetchSingleData(id);
            setNewProduct(response.data);
            console.log(response.data)
          } catch (error) {
            console.error(error);
          } 
        };
        fetchProductData();
      }, [id]);

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        const updatedInput = { ...newProduct, [name]: value };
        setNewProduct(updatedInput);
      };

const handleUpdate = async (e) => {
    e.preventDefault();
    console.log('Updating product with ID:', id);
    console.log('Data being sent:', newProduct);
    try {
        const response = await updateProduct(id, {newProduct});
        console.log(response);
        alert('Product updated successfully!');
    } catch (err) {
        console.error(err);
        alert('Error updating product: ' + err.message);
    }
}



      

    return (
        <section className="bg-white p-6 rounded shadow-md mb-8">
            <h2 className="text-xl font-bold mb-4">Update Product</h2>
            <form onSubmit={handleUpdate}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <InputFormAdmin type="text" name="title" label="Title" value={newProduct.title} handleInputChange={handleInputChange}/>

                    <InputFormAdmin label="Price" type="text" name="price" value={newProduct.price} handleInputChange={handleInputChange}/>

                    <InputFormAdmin label="Image Url" type="text" name="thumbnail" value={newProduct.thumbnail} handleInputChange={handleInputChange}/>

                </div>
                <div className="mb-4">
                    <TextArea label="Description" name="description" value={newProduct.description} handleInputChange={handleInputChange}/>

                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update Product</button>
            </form>
        </section>
    );
}

export default FormUpdateProduct;
