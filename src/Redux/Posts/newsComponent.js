import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTopHeadlines,
  fetchEverything,
  selectTopHeadlinesData,
  selectEverythingData,
} from "./newsSlice"; // Importing thunks and selectors

function NewsComponent() {
  const dispatch = useDispatch();
  const topHeadlinesData = useSelector(selectTopHeadlinesData);
  const everythingData = useSelector(selectEverythingData);

  useEffect(() => {
    // Fetch data when the component mounts
    dispatch(fetchTopHeadlines());
    dispatch(fetchEverything());
  }, []);

 
  return (
    <div>
      <h2>Top Headlines</h2>
      {topHeadlinesData?.status === "loading" && <p>Loading top headlines...</p>}
      {topHeadlinesData?.status === "failed" && (
        <p>Error loading top headlines.</p>
      )}
      {topHeadlinesData?.status === "succeeded" && (
        <ul>
          {topHeadlinesData?.data.map((article, index) => (
            <li key={index}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </li>
          ))}
        </ul>
      )}

      <h2>Everything</h2>
      {everythingData.status === "loading" && <p>Loading everything...</p>}
      {everythingData.status === "failed" && <p>Error loading everything.</p>}
      {everythingData.status === "succeeded" && (
        <ul>
          {everythingData.data.map((article, index) => (
            <li key={index}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default NewsComponent;

