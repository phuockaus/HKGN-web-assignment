/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import './news_template.css'

export default function NewsTemplate({ prop }) {
  const url = `/news/${prop.ID}`
  return (
    <Link to={url}>
      <div className="news-template">
        <div id="news-template-content">
          <img src={prop.image_link} alt="img" className="news_img" />
        </div>
      </div>
    </Link>
  )
}
