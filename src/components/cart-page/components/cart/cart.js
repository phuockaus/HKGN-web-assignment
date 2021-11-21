/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import ProductInCart from '../product-in-cart/product-in-cart'
import { AppContext } from '../../../../utils/contextControl'
import './cart.css'

export default function CartItems() {
  const { cart, addItemToCart, productList } = useContext(AppContext)
  const [tempCart, setTempCart] = useState(cart)
  const [totalPrice, setTotalPrice] = useState(0)

  const a0 = {
    productID: '1',
    quantity: '45'
  }
  const a1 = {
    productID: '2',
    quantity: '2'
  }
  let total = 0

  const itemList = () => {
    if (tempCart) {
      return tempCart.map(
        // eslint-disable-next-line max-len
        (item) => <ProductInCart props={item} cartPrice={totalPrice} setPrice={setTotalPrice} />
      )
    }
    return null
  }

  const getTotalPrice = () => {
    if ((tempCart.length !== 0) && productList) {
      console.log(tempCart)
      for (let i = 0; i < tempCart.length; i += 1) {
        for (let j = 0; j < productList.length; j += 1) {
          if (productList[j].product_ID === tempCart[i].productID) {
            total += parseInt(productList[j].cost, 10) * parseInt(tempCart[i].quantity, 10)
            setTotalPrice(total)
          }
        }
      }
    } else setTotalPrice(0)
  }

  useEffect(() => {
    if (cart.length === 0) {
      addItemToCart(a1)
      addItemToCart(a0)
    }
  }, [])
  useEffect(() => {
    getTotalPrice()
  })
  return (
    <div id="cart-list-container">
      <input type="button" id="exit-button" value="Thoát" onClick={() => { window.location.href = '/catalogue' }} />
      <div id="list-header">
        <div className="header1">Đơn giá</div>
        <div className="header">Số lượng</div>
        <div className="header">Thành tiền</div>
        <div className="header">Xóa</div>
      </div>
      <div id="product-list-container">
        {itemList()}
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
