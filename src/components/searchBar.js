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
      const apiKey = "2acb91a1189e4c378680b0ad0e99d5f1";
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





// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const SearchBar = () => {
//   const [searchItem, setSearchItem] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const articlesPerPage = 4;

//   const handleChange = (e) => {
//     setSearchItem(e.target.value);
//   };

//   useEffect(() => {
//     // Defining the API request inside the useEffect
//     const handleSearch = () => {
//       const apiKey = "2acb91a1189e4c378680b0ad0e99d5f1";
//       const query = searchItem;
//       const apiUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

//       axios
//         .get(apiUrl)
//         .then((response) => {
//           const articles = response.data.articles;
//           console.log(articles);

//           // Set the search results in state
//           setSearchResults(articles);
//         })
//         .catch((error) => {
//           console.error("Error fetching articles:", error);
//         });
//     };

//     // Call handleSearch when searchItem changes
//     if (searchItem) {
//       handleSearch();
//     }

//     // Cleanup function
//     return () => {
//       setSearchResults([]);
//     };
//   }, [searchItem]); 

//   // Calculating the index range for the current page
//   const indexOfLastArticle = currentPage * articlesPerPage;
//   const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
//   const currentArticles = searchResults.slice(
//     indexOfFirstArticle,
//     indexOfLastArticle
//   );

//   // Function to handle page change
//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   const SearchResults=()=>{
//     {
//       searchResults.length > 0 && (
//         <div className="search-results">
//           <h2>Search Results</h2>
//           <ul>
//             {currentArticles.map((article, index) => (
//               <li key={index}>
//                 <a
//                   href={article.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   {article.title}
//                 </a>
//                 <p>{article.description}</p>
//               </li>
//             ))}
//           </ul>
//           {/* Pagination controls */}
//           <div className="pagination">
//             {Array.from({ length: Math.ceil(searchResults.length / articlesPerPage) }).map((_, index) => (
//               <button key={index} onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
//             ))}
//           </div>
//         </div>
//       )
//     }
//   }

//   return (
//     <div className="search-container">
//       <input
//         type="search"
//         placeholder="Search..."
//         value={searchItem}
//         onChange={handleChange}
//         className="search-input"
//       />
//       <button className="search-button">Search</button>

//       {/* Display search results */}
//       {SearchResults}
//     </div>
//   );
// };

// export default SearchBar;
