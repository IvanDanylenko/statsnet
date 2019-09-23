import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = (props) => {
  return (props.pageCount)
    ?
      <ReactPaginate 
        pageRangeDisplayed={10} 
        marginPagesDisplayed={10}
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        nextClassName="page-item"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        previousLabel="&laquo;"
        nextLabel="&raquo;"
        activeClassName="active"
        disabledClassName="disabled"
        {...props} />
    :
      null
}

export default Pagination;
