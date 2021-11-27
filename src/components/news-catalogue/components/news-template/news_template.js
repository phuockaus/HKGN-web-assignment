/* eslint-disable react/prop-types */
import React from 'react'
import './news_template.css'
import { Link } from 'react-router-dom'

export default function NewsTemplate({ prop }) {
  const url = `/news/${prop.news_ID}`
  const shortContent = `${prop.content.substring(0, 300)}...`

  return (
    <Link to={url} className="newslist-template">
      <div id="newslist-template-container">
        <div id="newslist-template-image">
          <img src={prop.image_link} alt="newslist_img" />
        </div>
        <div id="newslist-template-title">
          {prop.title}
        </div>
        <div id="newslist-template-content">
          {shortContent}
        </div>
      </div>
    </Link>
  )
}
