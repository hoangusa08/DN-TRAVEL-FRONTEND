import "./Pagination.scss";
import React from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getTours } from "../../store/tours";

export default function Pagination() {
  const tours = useSelector((state) => state.tours);
  const dispatch = useDispatch();

  const handlePageClick = (event) => {
    dispatch(getTours(event.selected, tours.search));
  };
  return (
    <div className="pagination">
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={tours?.total}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        className="pagination-items"
        nextClassName="page-"
        pageClassName="page-number"
        pageLinkClassName="page-link"
        itemClass="page-item"
        nextLinkClassName=""
        previousClassName="previous-page"
        previousLinkClassName="previous-link"
      />
    </div>
  );
}
