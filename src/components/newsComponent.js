import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTopHeadlines,
  fetchEverything,
  selectTopHeadlinesData,
  selectEverythingData,
} from '../Redux/newsSlice'; // Importing thunks and selectors
import Pagination from "./Pagination";

const NewsComponent=()=> {
  const dispatch = useDispatch();
  const topHeadlinesData = useSelector(selectTopHeadlinesData);
  const everythingData = useSelector(selectEverythingData);

  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10; // Number of articles per page

  useEffect(() => {
    // Fetch data when the component mounts on the UI
    dispatch(fetchTopHeadlines());
    dispatch(fetchEverything());
  }, []);

  const paginate = (data) => {
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    return data.slice(indexOfFirstArticle, indexOfLastArticle);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="topHeadLines-container">
        <h2 className="top-news">Top Headlines</h2>
        {topHeadlinesData?.status === "loading" && (
          <p className="message">Loading top headlines...</p>
        )}
        {topHeadlinesData?.status === "failed" && (
          <p className="message">Error loading top headlines.</p>
        )}
        {topHeadlinesData?.status === "succeeded" && (
          <div>
            <ul>
              {paginate(topHeadlinesData?.data).map((article, index) => (
                <li key={index}>
                  <a
                    className="article-links"
                    target="blank"
                    href={article.url}
                  >
                    <h3 className="article-title">{article.title}</h3>
                  </a>

                  <p className="article-description">{article.description}</p>
                </li>
              ))}
            </ul>
            <div>
              <Pagination
                articlesPerPage={articlesPerPage}
                totalArticles={topHeadlinesData?.data.length}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        )}
      </div>

      <div className="otherNews-container">
        <h2 className="other-news">Other News</h2>
        {everythingData.status === "loading" && (
          <p className="message">Loading everything...</p>
        )}
        {everythingData.status === "failed" && (
          <p className="message">Error loading everything.</p>
        )}
        {everythingData.status === "succeeded" && (
          <div>
            <ul>
              {paginate(everythingData.data).map((article, index) => (
                <li key={index}>
                  <h3>
                    <a
                      className="article-links  article-title"
                      target="blank"
                      href={article.url}
                    >
                      {article.title}
                    </a>
                  </h3>
                  <p className="article-description">{article.description}</p>
                </li>
              ))}
            </ul>
            <div>
              <Pagination
                articlesPerPage={articlesPerPage}
                totalArticles={everythingData.data.length}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NewsComponent;
