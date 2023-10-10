import React from 'react'
import {  useSelector } from "react-redux"

export const FilteredResults = () => {
  const selectedCountry = useSelector((state) => state.filter.filteredArticles);

  
  return (
    <ul>
        {selectedCountry.map((article, index) => (
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
  )
}
