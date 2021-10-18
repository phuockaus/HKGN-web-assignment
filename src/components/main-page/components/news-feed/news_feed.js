import React from 'react'
import './news_feed.css'
import NewsTemplate from '../news-template/news_template'

export default function NewsFeed() {
  const news = ([
    {
      name: 'N1'
    },
    {
      name: 'N2'
    },
    {
      name: 'N3'
    },
    {
      name: 'N4'
    }
  ])
  const newsList = news.map((n) => <NewsTemplate prop={n.name} />)
  return (
    <div id="news-feed">
      <div id="main-news">
        <div id="main-news-area-title">Ưu đãi/Tin nổi bật</div>
        <div id="main-news-content">
          <div id="main-feed" />
        </div>
      </div>
      <div id="sub-feeds">
        {newsList}
      </div>
    </div>
  )
}
