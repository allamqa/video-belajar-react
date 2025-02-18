import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import Pagination from '../../../pagination';
import { useState } from 'react';



const TableProduct = ({getDataById,handleDelete}) => {

  const products = useSelector((state) => state.product.product);
  const [currentPage, setCurrentPage] = useState(1);
      const [postPerPage, setPostPerPage] = useState(5);

      const lastPostIndex = currentPage * postPerPage;
      const firstPostIndex = lastPostIndex - postPerPage;
      const currentPosts = products.slice(firstPostIndex, lastPostIndex);


  


    

    
    return(
      <>
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
      {currentPosts.map((item,index)=> (
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
 <Pagination totalPost={products.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} ></Pagination>
       
 </>
    );
}

TableProduct.propTypes = {
  getDataById: PropTypes.func.isRequired
};

export default TableProduct;
