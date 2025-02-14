import { useEffect, useState } from "react";
import {  deleteProduct, fetchDataCall } from "../../../service/products.service";




const TableProduct = ({getDataById}) =>{

  const [dataProducts,setDataProducts] = useState([]);

      const fetchData = async () => {
         
        const data = await fetchDataCall();
        setDataProducts(data.data.products);
         };

         const handleDelete =  (id) => {
              deleteProduct(id);
              console.log(id)
         }
      
      useEffect(() => {
          fetchData();
      }, []);
    
    return(
        <table className="w-full table-auto">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2">NO</th>
          <th className="px-4 py-2">TITLE</th>
          <th className="px-4 py-2">PRICE</th>
          <th className="px-4 py-2">DESCRIPTION</th>
          <th className="px-4 py-2">ACTIONS</th>
        </tr>
      </thead>
      <tbody>
      {dataProducts.map((item,index)=> (
                 <tr key={index}>
                 <td className="border px-4 py-2">{item.id}</td>
                 <td className="border px-4 py-2 font-bold">{item.title}</td>
                 <td className="border px-4 py-2">{item.price}</td>
                 <td className="border px-4 py-2">{item.description}</td>
                 <td className="border px-4 py-2">
                   <button onClick={() => getDataById(item.id)} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                   <button onClick={() => handleDelete(item.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                 </td>
               </tr>
            ))}
       
      </tbody>
    </table>
    );
}

export default TableProduct;