/* eslint-disable react/prop-types */
import React from 'react'
import './template.css'

export default function ProductCartTemplate({ props }) {
  return (
    <div id="product-template-cart-container">
      <div id="product-template-cart-name">
        {props.name}
      </div>
      <div id="product-template-cart-total">
        {props.total}
        {' '}
        đồng
      </div>
    </div>
  )
}
