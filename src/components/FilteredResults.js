import React ,{ useState , useEffect }from 'react'
import axios from 'axios';

export const FilteredResults = ({selectedCountry}) => {

  const [filteredArticles, setFilteredArticles] = useState([]);
  
  const apiKey = "2acb91a1189e4c378680b0ad0e99d5f1";

    useEffect(() => {
      const filterUrl = `https://newsapi.org/v2/top-headlines?country=${selectedCountry}&apiKey=${apiKey}`;

      axios.get(filterUrl)
        .then((res) => {
          const articles = res.data.articles;
          setFilteredArticles(articles);
        })
        .catch((error) => {
          console.error("Error fetching articles:", error);
        });
   

     }, [selectedCountry]);

  return (
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
  )
}
