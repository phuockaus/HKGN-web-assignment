import React from 'react'
import './mini-router.css'

export default function miniRouter({ props }) {
  const type = props.category.charAt(0).toUpperCase() + props.category.slice(1)
  return (
    <div id="miniRouter">
      <div className="path-bar">{type}</div>
      <div className="blank"> &gt; </div>
      <div className="path-bar">{ props.name }</div>
    </div>
  )
}
