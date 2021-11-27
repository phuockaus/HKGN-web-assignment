/* eslint-disable react/prop-types */
import React from 'react'
import './newsItem.css'

export default function NewsItem({ data, setDataInPop, setShowPop }) {
  const handleOnClick = () => {
    setDataInPop(data)
    setShowPop(true)
  }

  return (
    <button type="button" className="news-card" key={data.newsID} onClick={handleOnClick}>
      <div className="content">{data.news_ID}</div>
      <div className="content">{data.title}</div>
      <div className="content image">
        <img src={data.image_link} alt={data.image_link} className="mini-img" />
      </div>
      <div className="content">{data.position}</div>
    </button>
  )
}
