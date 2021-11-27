/* eslint-disable react/prop-types */
import React, { useContext, useState, useEffect } from 'react'
import ReactHtmlParser from 'react-html-parser'
import { AppContext } from '../../../../utils/contextControl'
import './main.css'

export default function Main({ newsID }) {
  const { newsList } = useContext(AppContext)
  const [tempNews, setTempNews] = useState({
    title: '',
    image_link: '',
    content: ''
  })

  const getNews = () => {
    if (newsList) {
      for (let i = 0; i < newsList.length; i += 1) {
        if (newsList[i].news_ID === newsID) {
          setTempNews({
            title: newsList[i].title,
            image_link: newsList[i].image_link,
            content: newsList[i].content
          })
        }
      }
    }
  }

  useEffect(() => {
    getNews()
  }, [newsList])

  return (
    <div id="newsDetail-container">
      <div id="newsDetail-header">Tin tức</div>
      <div id="newsDetail-title">
        {tempNews.title}
      </div>
      <div id="temp">
        <div id="newsDetail-image-container">
          <img src={tempNews.image_link} alt="news" id="newsDetail-image" />
        </div>
        <div id="newsDetail-content-container">
          <div id="newsDetail-content">
            {ReactHtmlParser(tempNews.content)}
          </div>
        </div>
      </div>
    </div>
  )
}
