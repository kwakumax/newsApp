import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchBar = () => {
  const [searchItem, setSearchItem] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    setSearchItem(e.target.value);
  };

  useEffect(() => {
    // Defining the API request inside the useEffect
    const handleSearch = () => {
      const apiKey = "8b9fe0757d70451eb95b84b06ca317bd";
      const query = searchItem;
      const apiUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

      axios
        .get(apiUrl)
        .then((response) => {
          const articles = response.data.articles;
          console.log(articles);

          // Set the search results in state
          setSearchResults(articles);
        })
        .catch((error) => {
          console.error("Error fetching articles:", error);
        });
    };

    // Call handleSearch when searchItem changes
    if (searchItem) {
      handleSearch();
    }

    // Cleanup function
    return () => {
      setSearchResults([]);
    };
  }, [searchItem]); 

  return (
    <div className="search-container">
      <input
        type="search"
        placeholder="Search..."
        value={searchItem}
        onChange={handleChange}
        className="search-input"
      />
      <button className="search-button">Search</button>

      {/* Display search results */}
      {searchResults.length > 0 && (
        <div className="search-results">
          <h2>Search Results</h2>
          <ul>
            {searchResults.map((article, index) => (
              <li key={index}>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  {article.title}
                </a>
                <p>{article.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
