

import PropTypes from 'prop-types';

const Pagination = ({ totalPost, postPerPage,setCurrentPage,currentPage}) => {

    let pages = [];

    for(let i = 1; i <= Math.ceil(totalPost / postPerPage); i++ ){
        pages.push(i);
    }
  return (
    <div className=" flex justify-center mt-10">
     {pages.map((page,index) => (
          <button
            key={index}
            className={page === currentPage ? "bg-blue-500 text-white px-3 py-1 rounded mx-1" : "bg-white text-blue-500 border border-blue-500 px-3 py-1 rounded mx-1"}
            onClick={() => setCurrentPage(page) }
          >
            
            {page}
          </button>
        ))}
  </div>
    
  
  );
};

Pagination.propTypes = {
  totalPost: PropTypes.number.isRequired,
  postPerPage: PropTypes.number.isRequired,
};


export default Pagination
