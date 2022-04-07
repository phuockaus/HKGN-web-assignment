import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../../../utils/contextControl'
import HotNewsTemplate from '../hot-news/hot_news'
import NewsTemplate from '../news-template/news_template'
import './main.css'

export default function Main() {
  const { newsList } = useContext(AppContext)
  const [tempNewsList, setTempNewsList] = useState(newsList)

  const getNewsList = () => {
    if (newsList) {
      const lst = []
      for (let i = 0; i < newsList.length; i += 1) {
        if (newsList[i].position !== '1') {
          lst.push({
            news_ID: newsList[i].news_ID,
            title: newsList[i].title,
            image_link: newsList[i].image_link,
            content: newsList[i].content
          })
        }
      }
      setTempNewsList(lst)
    }
  }

  useEffect(() => {
    getNewsList()
  }, [newsList])

  const showNewsList = () => {
    if (tempNewsList) {
      return tempNewsList.map((news) => <NewsTemplate prop={news} />)
    }
    return null
  }

  const showHotNews = () => {
    if (newsList) {
      for (let i = 0; i < newsList.length; i += 1) {
        if (newsList[i].position === '1') {
          return <HotNewsTemplate prop={newsList[i]} />
        }
      }
    }
    return null
  }

  return (
    <div id="news-container">
      <div id="news-contain">
        <div id="news-title">Tin tức</div>
        <div id="hot-news">{showHotNews()}</div>
        <div id="news-list">{showNewsList()}</div>
      </div>
    </div>
  )
}
