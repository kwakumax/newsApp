import React, { useState, useEffect } from 'react';
import axios from "axios";

export const FilterComponent = () => {
  const [filteredCountry, setFilteredCountry] = useState(" ");
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const apiKey = "2acb91a1189e4c378680b0ad0e99d5f1";

  const handleCountryChange=(e)=>{
    setFilteredCountry(e.target.value)
    if(filteredCountry){
      setShowResults(true)
    }
  }

  useEffect(() => {
    
    const fetchTopHeadlinesByCountry = () => {
      const filterUrl = `https://newsapi.org/v2/top-headlines?country=${filteredCountry}&apiKey=${apiKey}`;

      axios.get(filterUrl)
        .then((res) => {
          
          const articles = res.data.articles;
          setFilteredArticles(articles);
        })
        .catch((error) => {
          console.error("Error fetching articles:", error);
        });
    };

    fetchTopHeadlinesByCountry();
  }, [filteredCountry]);

  

  return (
    <div className='filtered-country'>

      {showResults && <h2>Filtered Articles for Country: {filteredCountry}</h2>}

      <select value={filteredCountry} onChange={handleCountryChange} className='filter-option'>
        <option value=''>--choose a country--</option>
        <option value="us">United States</option>
        <option value="gb">United Kingdom</option>
        <option value="ca">Canada</option>
        {/* Add more countries as needed */}
      </select>
      
      <ul>
        {filteredArticles.map((article, index) => (
          <li key={index}>

                  <a
                    className="article-links"
                    target="blank"
                    href={article.url}
                  >
                   <h3>{article.title}</h3>
                  </a>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
