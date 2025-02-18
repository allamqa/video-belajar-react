
import TableProduct from "../Elements/Table/TableProduct";

const ProductList = ({getDataById,handleDelete}) =>{
    
    return(
        <section className="bg-white p-6 rounded shadow-md">
  <h2 className="text-xl font-bold mb-4">Product List</h2>
  <div className="overflow-x-auto">
   <TableProduct getDataById={getDataById} handleDelete={handleDelete} ></TableProduct>
  </div>
  
</section>
    );
}

export default ProductList;