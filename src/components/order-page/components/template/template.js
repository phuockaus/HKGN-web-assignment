/* eslint-disable react/prop-types */
import React from 'react'
import './template.css'

export default function OrderTemplate({ props }) {
  const finalcost = parseInt(props.final_cost, 10)
  // const viewDetails = () => {

  // }
  return (
    <button type="button" id="product-template-order-container">
      <div id="product-template-order-id">
        {props.order_ID}
      </div>
      <div id="product-template-order-date">
        {props.created_at}
      </div>
      <div id="product-template-order-total">
        {finalcost}
        {' '}
        đồng
      </div>
      <div id="product-template-order-status">
        {props.status}
      </div>
    </button>
  )
}
