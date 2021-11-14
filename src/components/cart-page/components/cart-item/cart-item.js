/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react'
import ProductInCart from '../product-in-cart/product-in-cart'
import { AppContext } from '../../../../utils/contextControl'
import './cart-item.css'

export default function CartItems() {
  const { cart, addItemToCart } = useContext(AppContext)

  const a0 = {
    productID: '1',
    quantity: '2'
  }
  const a1 = {
    productID: '2',
    quantity: '3'
  }
  const itemList = (list) => {
    if (cart.length === 0) {
      addItemToCart(a0)
      addItemToCart(a1)
    }
    if (list) return list.map((product) => <ProductInCart props={product} />)
    return null
  }
  const totalPrice = 0
  return (
    <div id="cart-list-container">
      <input type="button" id="exit-button" value="Thoát" />
      <div id="list-header">
        <div className="header1">Đơn giá</div>
        <div className="header">Số lượng</div>
        <div className="header">Thành tiền</div>
        <div className="header">Xóa</div>
      </div>
      <div id="product-list-container">
        {itemList(cart)}
      </div>
      <div id="controler">
        <div id="totalprice">
          <span>Tổng cộng: </span>
          {totalPrice}
          <span> đồng</span>
        </div>
        <input type="submit" id="buy-button" value="Mua hàng" />
      </div>
    </div>
  )
}
