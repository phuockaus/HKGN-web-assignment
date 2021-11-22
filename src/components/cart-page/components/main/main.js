import React from 'react'
import CartItems from '../cart/cart'
import './main.css'

export default function MainCart() {
  return (
    <div id="cart-container">
      <div id="cart-header">Giỏ hàng</div>
      <div id="cartlist-container">
        <CartItems />
      </div>
    </div>
  )
}
