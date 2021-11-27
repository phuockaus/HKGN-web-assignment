/* eslint-disable react/prop-types */
import React from 'react'
import './newsFrame.css'
import NewsItem from './newsItem'

export default function NewsFrame({
  newsList, setDataInPop, setShowPop, openDeletePopup
}) {
  const renderNewsList = () => {
    if (newsList) {
      return newsList.map((news) => (
        <NewsItem
          data={news}
          setDataInPop={setDataInPop}
          setShowPop={setShowPop}
          openDeletePopup={openDeletePopup}
        />
      ))
    }
    return null
  }

  return (
    <div id="news-frame-container">
      <div id="table-title">
        <div className="title">Mã bài viết</div>
        <div className="title">Tiêu đề</div>
        <div className="title">Hình ảnh</div>
        <div className="title">Vị trí trên trang chủ</div>
        <div className="title" />
      </div>
      <div id="news-frame-content">{renderNewsList()}</div>
    </div>
  )
}
