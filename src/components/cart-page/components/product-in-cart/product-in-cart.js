/* eslint-disable react/prop-types */
import React from 'react'
import './product-in-cart.css'

export default function ProductInCart({
  props, increase, decrease, remove
}) {
  return (
    <div id="product-in-cart-container">
      <div id="product-img-in-cart-container">
        <img src={props.image} alt="product" id="product-in-cart-img" />
      </div>
      <div id="product-description-name-cart">
        <div id="product-in-cart-name">{props.name}</div>
        <div id="product-description">{props.description}</div>
        <div id="in-cart-removeItem">
          <input
            id="removeButton"
            className="btn"
            type="button"
            value="Xóa"
            onClick={() => remove(props.id)}
          />
        </div>
      </div>
      <div id="in-cart-price">
        <div>
          {props.cost}
          <span> đồng</span>
        </div>
      </div>
      <div id="in-cart-quantity">
        <input
          id="decrease-btn"
          className="quantity-btn"
          type="button"
          value="-"
          onClick={() => decrease(props.id)}
        />
        <span id="in-cart-amount">{props.quantity}</span>
        <input
          id="increase-btn"
          className="quantity-btn"
          type="button"
          value="+"
          onClick={() => increase(props.id)}
        />
      </div>
      <div id="in-cart-total">
        <div>
          {props.total}
          <span> đồng</span>
        </div>
      </div>
    </div>
  )
}
