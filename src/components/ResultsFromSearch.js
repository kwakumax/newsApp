import React,{  useState } from 'react'
import { useSelector } from 'react-redux';


export const ResultsFromSearch = () => {

  const searchedArticle = useSelector(state => state.search.searchResults)

  const [showResults, setShowResults] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const articlesPerPage = 10;

  // Calculating the index range for the current page
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = searchedArticle.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  // Function to handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  if (searchedArticle.length > 0) {
    setShowResults(true);
  }

  return (
    <div>
       {/* Display search results */}
       {showResults && (
        <div className="search-results">
          <h2>Search Results</h2>
          <ul>
            {currentArticles.map((article, index) => (
              <li key={index}>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {article.title}
                </a>
                <p>{article.description}</p>
              </li>
            ))}
          </ul>
          {/* Pagination controls */}
          <div className="pagination">
            {Array.from({ length: Math.ceil(searchedArticle.length / articlesPerPage) }).map((_, index) => (
              <button key={index} onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
            ))}
          </div>
        </div>
      )}

    </div>
  )
}