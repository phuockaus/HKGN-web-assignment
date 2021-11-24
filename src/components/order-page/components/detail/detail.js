/* eslint-disable react/prop-types */
import React from 'react'
import './detail.css'

export default function OrderDetail({ prop }) {
  return (
    <div id="detail-pop-up-container">
      <div id="detail-template-order-image">
        <img src={prop.image} alt="logo" />
      </div>
      <div id="detail-template-order-name">
        {prop.name}
      </div>
      <div id="detail-template-order-cost">
        {prop.cost}
        {' '}
        đồng
      </div>
      <div id="detail-template-order-quantity">
        Số lượng:
        {' '}
        {prop.quantity}
      </div>
    </div>
  )
}
