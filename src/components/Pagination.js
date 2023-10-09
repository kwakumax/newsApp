import React from "react";

const Pagination = ({ articlesPerPage, totalArticles, currentPage, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <li key={number} className={number === currentPage ? "active" : ""}>
          <button onClick={() => onPageChange(number)}>{number}</button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
