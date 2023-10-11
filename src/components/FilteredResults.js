import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export const FilteredResults = () => {
  const selectedCountry = useSelector((state) => state.filter.filteredArticles);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 12;

  // Calculate the indexes for the current page
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = selectedCountry.slice(indexOfFirstArticle, indexOfLastArticle);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <ul className='filter-container'>
        {currentArticles.map((article, index) => (
          <li key={index} className='filter'>
            <a
              className="article-linkz"
              target="blank"
              href={article.url}
            >
              <h3>{article.title}</h3>
            </a>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>

      {/* Pagination controls */}
      <div className="pagination">
        {Array.from({ length: Math.ceil(selectedCountry.length / articlesPerPage) }).map((_, index) => (
          <button key={index} onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
        ))}
      </div>
    </div>
  );
};

