import React from 'react'
import './product_template.css'

// eslint-disable-next-line react/prop-types
export default function ProductTemplate({ prop }) {
  return (
    <div className="product-template">
      <div id="product-template-content">
        {prop}
      </div>
    </div>
  )
}
