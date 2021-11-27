/* eslint-disable react/prop-types */
import React from 'react'
import './news_template.css'
import ReactHtmlParser from 'react-html-parser'
import { Link } from 'react-router-dom'

export default function NewsTemplate({ prop }) {
  const url = `/news/${prop.news_ID}`
  const shortContent = `${prop.content.substring(0, 200)}...`

  return (
    <Link to={url} className="newslist-template">
      <div id="newslist-container">
        <div id="newslist-image">
          <img src={prop.image_link} alt="newslist_img" />
        </div>
        <div id="newslist-info-container">
          <div id="newslist-title">
            {prop.title}
          </div>
          <div id="newslist-content">
            {ReactHtmlParser(shortContent)}
          </div>
        </div>
      </div>
    </Link>
  )
}
