/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../../../utils/contextControl'
import './news_feed.css'
import NewsTemplate from '../news-template/news_template'

export default function NewsFeed() {
  const { newsList } = useContext(AppContext)
  const [hotNews, setHotNews] = useState({
    ID: '',
    image_link: ''
  })
  const [news, setNews] = useState([
    {
      ID: '2',
      image_link: '2'
    },
    {
      ID: '3',
      image_link: '3'
    },
    {
      ID: '4',
      image_link: '4'
    },
    {
      ID: '5',
      image_link: '5'
    }
  ])
  const getNewsToShow = () => {
    if (newsList) {
      for (let i = 0; i < newsList.length; i += 1) {
        switch (newsList[i].position) {
          case '1':
            setHotNews({
              ID: newsList[i].news_ID,
              image_link: newsList[i].image_link
            })
            break
          case '2':
            setNews([...news, news[0].ID = newsList[i].news_ID])
            setNews([...news, news[0].image_link = newsList[i].image_link])
            break
          case '3':
            setNews([...news, news[1].ID = newsList[i].news_ID])
            setNews([...news, news[1].image_link = newsList[i].image_link])
            break
          case '4':
            setNews([...news, news[2].ID = newsList[i].news_ID])
            setNews([...news, news[2].image_link = newsList[i].image_link])
            break
          case '5':
            setNews([...news, news[3].ID = newsList[i].news_ID])
            setNews([...news, news[3].image_link = newsList[i].image_link])
            break
          default:
            break
        }
      }
    }
  }
  useEffect(() => {
    getNewsToShow()
  }, [newsList])
  const ListOfNews = () => news.map((n) => {
    if (n.ID) {
      return <NewsTemplate prop={n} />
    }
    return null
  })
  return (
    <div id="news-feed">
      <div id="main-news">
        <div id="main-news-content">
          <div id="main-feed">
            <Link to={`/news/${hotNews.ID}`}>
              <img src={hotNews.image_link} alt="img" className="news-img" />
            </Link>
          </div>
        </div>
      </div>
      <div id="sub-feeds">
        {ListOfNews()}
      </div>
    </div>
  )
}
