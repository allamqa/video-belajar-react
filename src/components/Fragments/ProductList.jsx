import TableProduct from "../Elements/Table/TableProduct";

const ProductList = ({getDataById}) =>{
    
    return(
        <section className="bg-white p-6 rounded shadow-md">
  <h2 className="text-xl font-bold mb-4">Product List</h2>
  <div className="overflow-x-auto">
   <TableProduct getDataById={getDataById} ></TableProduct>
  </div>
  <div className="flex justify-center mt-4">
    <button className="bg-blue-500 text-white px-3 py-1 rounded mx-1">1</button>
    <button className="bg-white text-blue-500 border border-blue-500 px-3 py-1 rounded mx-1">2</button>
  </div>
</section>
    );
}

export default ProductList;