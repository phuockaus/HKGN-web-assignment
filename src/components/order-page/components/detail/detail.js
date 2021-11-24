/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import './detail.css'

export default function OrderDetail({ prop }) {
  const path = `/product/${prop.id}`
  return (
    <Link to={path} id="detail-pop-up-container">
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
    </Link>
  )
}
