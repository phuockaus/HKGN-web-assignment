import React from 'react'
import './news_template.css'

// eslint-disable-next-line react/prop-types
export default function NewsTemplate({ prop }) {
  return (
    <div className="news-template">
      <div id="news-template-content">
        {prop}
      </div>
    </div>
  )
}
