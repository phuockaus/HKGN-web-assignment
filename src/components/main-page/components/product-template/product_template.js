/* eslint-disable react/prop-types */
import React from 'react'
import './product_template.css'

export default function ProductTemplate({ prop }) {
  const cost = `${parseInt(prop.cost, 10)} VND`
  return (
    <div className="product-template">
      <div id="product-template-content">
        <div id="product-template-image">
          <img src={prop.image_link} alt="product_logo" />
        </div>
        <div id="product-template-name">
          {prop.name}
        </div>
        <div id="product-template-cost">
          {cost}
        </div>
      </div>
    </div>
  )
}
