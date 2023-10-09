import React, { useEffect, useState } from 'react'
import axios from 'axios'



export const FullArticlePage = () => {

  const [FullPageTopHeadlines, setFullPageTopHeadlines]=useState([])
  const [FullPageEverything, setFullPageEverything]=useState([])

  apiKey='8b9fe0757d70451eb95b84b06ca317bd'

  useEffect(()=>{
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
      .then((response) => {
          setFullPageTopHeadlines(response.data.articles)
      }) 
  },[])  

  useEffect(()=>{
    axios.get(`https://newsapi.org/v2/everything?q=technology&apiKey=${apiKey}`)
      .then((response) => {
          setFullPageEverything(response.data.articles)
      }) 
  },[])

  const renderedArticles =(articles)=>{
    return articles.map((article,index)=>{
      <article key={index}>
        <h1>{article.title}</h1>
        <h3>{article.author}</h3>
        <h4>{article.publishedAt}</h4>
        <p>{article.content}</p>
      </article>
    })
  }

  return (
    <div>
      <section>
       {renderedArticles(FullPageTopHeadlines)}
      </section>

      <section>
       {renderedArticles(FullPageEverything)}
      </section>
    </div>
  )
}
