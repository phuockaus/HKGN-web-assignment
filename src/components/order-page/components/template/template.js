/* eslint-disable react/prop-types */
import React from 'react'
import './template.css'

export default function OrderTemplate({
  props, setPop, setOrderID, setStatus
}) {
  const finalcost = parseInt(props.final_cost, 10)
  const pop = () => {
    setPop(true)
    setOrderID(props.order_ID)
    setStatus(props.status)
  }
  return (
    <button
      type="button"
      id="product-template-order-container"
      onClick={pop}
    >
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
