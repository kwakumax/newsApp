import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTopHeadlines,
  fetchEverything,
  selectTopHeadlinesData,
  selectEverythingData,
} from '../Posts/newsSlice'; // Importing thunks and selectors

function NewsComponent() {
  const dispatch = useDispatch();
  const topHeadlinesData = useSelector(selectTopHeadlinesData);
  const everythingData = useSelector(selectEverythingData);

  useEffect(() => {
    // Fetch data when the component mounts on the UI
    dispatch(fetchTopHeadlines());
    dispatch(fetchEverything());
  }, []);

 
  return (
    <div className="container">
      <h2>Top Headlines</h2>
      {topHeadlinesData?.status === "loading" && <p className="message">Loading top headlines...</p>}
      {topHeadlinesData?.status === "failed" && (
        <p className="message">Error loading top headlines.</p>
      )}
      {topHeadlinesData?.status === "succeeded" && (
        <ul>
          {topHeadlinesData?.data.map((article, index) => (
            <li key={index}>
              <a className="article-links" target="blank" href={article.url}><h3>{article.title}</h3></a>
              
              <p>{article.description}</p>
            </li>
          ))}
        </ul>
      )}

      <h2>Everything</h2>
      {everythingData.status === "loading" && <p className="message">Loading everything...</p>}
      {everythingData.status === "failed" && <p className="message">Error loading everything.</p>}
      {everythingData.status === "succeeded" && (
        <ul>
          {everythingData.data.map((article, index) => (
            <li key={index}>
              <h3><a className="article-links" target="blank" href={article.url}>
                {article.title}
                </a></h3>
              <p>{article.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NewsComponent;

