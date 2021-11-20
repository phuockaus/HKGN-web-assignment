import React, { useContext, useEffect, useState } from 'react'
import ProductInCart from '../product-in-cart/product-in-cart'
import { AppContext } from '../../../../utils/contextControl'
import './cart.css'

export default function CartItems() {
  const { cart, addItemToCart, productList } = useContext(AppContext)
  const [tempCart] = useState(cart)
  const [totalPrice, setTotalPrice] = useState(0)

  const a0 = {
    productID: '1',
    quantity: '45'
  }
  const a1 = {
    productID: '2',
    quantity: '3'
  }
  let total = 0
  const itemList = (cartlist) => {
    if (cartlist) {
      return cartlist.map(
        (item) => <ProductInCart props={item} cartPrice={totalPrice} setPrice={setTotalPrice} />
      )
    }
    return null
  }

  const calculatePrice = () => {
    if (productList) {
      for (let i = 0; i < tempCart.length; i += 1) {
        for (let j = 0; j < productList.length; j += 1) {
          if (productList[j].product_ID === tempCart[i].productID) {
            total += parseInt(productList[i].cost, 10) * parseInt(tempCart[i].quantity, 10)
            setTotalPrice(total)
          }
        }
      }
    }
    return null
  }
  useEffect(() => {
    if (cart.length === 0) {
      addItemToCart(a0)
      addItemToCart(a1)
    }
  }, [])
  useEffect(() => {
    calculatePrice()
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
        {itemList(tempCart)}
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
