/* eslint-disable react/prop-types */
import React from 'react'
import './newsItem.css'

export default function NewsItem({
  data, setDataInPop, setShowPop, openDeletePopup
}) {
  const handleOnClick = () => {
    setDataInPop(data)
    setShowPop(true)
  }
  const shortTitle = data.title.length > 50 ? `${data.title.substring(0, 30)}...` : data.title

  const handleOnDelete = () => {
    openDeletePopup(data.news_ID)
  }

  return (
    <button type="button" className="news-card" key={data.newsID} onClick={handleOnClick}>
      <div className="content">{data.news_ID}</div>
      <div className="content">{shortTitle}</div>
      <div className="content image">
        <img src={data.image_link} alt={data.image_link} className="mini-img" />
      </div>
      <div className="content">{data.position}</div>
      <div className="content">
        <button type="button" className="btn-cancel delete" onClick={() => handleOnDelete()}>
          Xóa
        </button>
      </div>
    </button>
  )
}
