/* eslint-disable react/prop-types */
import React from 'react'
import './hot_news.css'
import ReactHtmlParser from 'react-html-parser'
import { Link } from 'react-router-dom'

export default function NewsTemplate({ prop }) {
  const url = `/news/${parseInt(prop.news_ID, 10)}`
  const shortContent = `${prop.content.substring(0, 500)}...`
  return (
    <div id="hotnews-template-container">
      <div id="hotnews-image-container">
        <Link to={url}>
          <img src={prop.image_link} alt="news_img" id="hotnews-image" />
        </Link>
      </div>
      <div id="hotnews-content-container">
        <div id="hotnews-template-title">
          <Link to={url} id="hotnews-link">
            {prop.title}
          </Link>
        </div>
        <div id="hotnews-template-content">{ReactHtmlParser(shortContent)}</div>
      </div>
    </div>
  )
}
