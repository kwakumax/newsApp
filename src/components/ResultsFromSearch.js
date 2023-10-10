import React,{ useEffect, useState } from 'react'
import axios from 'axios';

export const ResultsFromSearch = ({value}) => {

  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const articlesPerPage = 10;

 

 
    
    useEffect(() => {
      // Defining the API request inside the useEffect
      
      const apiKey = "2acb91a1189e4c378680b0ad0e99d5f1";
      const query = value;
      const apiUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;
      axios
        .get(apiUrl)
        .then((response) => {
          const articles = response.data.articles;
          console.log(articles);

          setSearchResults(articles);
          setShowResults(true);
          setCurrentPage(1); // Reset to the first page when a new search is performed
        })
        .catch((error) => {
          console.error("Error fetching articles:", error);
        });
    }

    , [value]);

   


  // Calculating the index range for the current page
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = searchResults.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  // Function to handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };


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
            {Array.from({ length: Math.ceil(searchResults.length / articlesPerPage) }).map((_, index) => (
              <button key={index} onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
            ))}
          </div>
        </div>
      )}

    </div>
  )
}