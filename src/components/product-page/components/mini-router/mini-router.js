import React from 'react'
import './mini-router.css'

export default function miniRouter({ props }) {
  const type = props.category.charAt(0).toUpperCase() + props.category.slice(1)
  return (
    <div id="miniRouter">
      <a className="buttons-bar" href="/home">
        { type }
      </a>
      <div className="blank"> &gt; </div>
      <a className="buttons-bar" href="/home">
        { props.name }
      </a>
    </div>
  )
}
