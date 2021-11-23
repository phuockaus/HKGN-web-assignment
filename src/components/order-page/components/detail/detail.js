/* eslint-disable react/prop-types */
import React from 'react'
import './detail.css'

export default function OrderDetail({ props }) {
  return (
    <div id="order-pop-up-container">
      <div id="popup-template-order-image">
        <img src={props.image} alt="logo" />
      </div>
      <div id="popup-template-order-name">
        {props.name}
      </div>
      <div id="popup-template-order-cost">
        {props.cost}
        {' '}
        đồng
      </div>
      <div id="popup-template-order-quantity">
        {props.quantity}
      </div>
    </div>
  )
}
