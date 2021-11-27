import React, { useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import ProductInCart from '../product-in-cart/product-in-cart'
import { AppContext } from '../../../../utils/contextControl'
import './cart.css'
import { decreaseAmount, increaseAmount, removeItemFromCart } from '../../../../utils/cart'

export default function CartItems() {
  const { productList } = useContext(AppContext)
  const cart = JSON.parse(Cookies.get('cart'))
  const [totalPrice, setTotalPrice] = useState(0)
  const [itemList, setItemList] = useState([])

  const getProductInfo = (id) => {
    if (productList) return productList.find((product) => product.product_ID === id)
    return null
  }
  const getTotalPrice = () => {
    let total = 0
    for (let i = 0; i < itemList.length; i += 1) {
      total += itemList[i].total
    }
    setTotalPrice(total)
  }

  useEffect(() => {
    getTotalPrice()
  }, [itemList])

  const getItems = () => {
    const lst = []
    if (productList) {
      for (let i = 0; i < cart.length; i += 1) {
        const product = getProductInfo(cart[i].productID)
        lst.push({
          id: cart[i].productID,
          image: product.image_link,
          description: product.description,
          name: product.name,
          quantity: parseInt(cart[i].quantity, 10),
          cost: parseInt(product.cost, 10),
          total: parseInt(cart[i].quantity, 10) * parseInt(product.cost, 10)
        })
      }
    }
    setItemList(lst)
  }

  useEffect(() => {
    getItems()
  }, [productList])

  const decrease = (id) => {
    for (let i = 0; i < itemList.length; i += 1) {
      if (itemList[i].id === id && itemList[i].quantity > 1) {
        itemList[i].quantity -= 1
        itemList[i].total -= itemList[i].cost
        break
      }
    }
    decreaseAmount(id, 1)
    getTotalPrice()
  }

  const increase = (id) => {
    for (let i = 0; i < itemList.length; i += 1) {
      const product = getProductInfo(cart[i].productID)
      if (itemList[i].id === id && itemList[i].quantity < parseInt(product.stock, 10)) {
        itemList[i].quantity += 1
        itemList[i].total += itemList[i].cost
        break
      }
    }
    increaseAmount(id, 1)
    getTotalPrice()
  }

  const removeItem = (id) => {
    removeItemFromCart(id)
    for (let i = 0; i < itemList.length; i += 1) {
      if (itemList[i].id === id) {
        itemList.splice(i, 1)
      }
    }
    getTotalPrice()
  }

  const renderItemList = () => {
    // eslint-disable-next-line max-len
    if (itemList) return itemList.map((item) => <ProductInCart props={item} increase={increase} decrease={decrease} remove={removeItem} />)
    return null
  }

  useEffect(() => {
    if (cart.length === 0) {
      document.getElementById('buy-button').style.display = 'none'
    } else document.getElementById('buy-button').style.display = 'block'
  }, [cart])
  return (
    <div id="cart-list-container">
      <div id="cart-list-title">Giỏ hàng của tôi</div>
      <div id="list-header">
        <div className="header1">Sản phẩm</div>
        <div className="header2">Giá</div>
        <div className="header3">Số lượng</div>
        <div className="header4">Thành tiền</div>
      </div>
      <div className="hr" />
      <div id="product-list-container">
        {renderItemList()}
      </div>
      <div id="controler">
        <div id="totalprice">
          <span>Tổng cộng: </span>
          <span id="total-price">
            {totalPrice}
            <span> đồng</span>
          </span>
        </div>
        <div className="hr" />
        <a href="/catalogue" className="btn" id="continue-shopping-button">Tiếp tục mua sắm</a>
        <a href="/payment" className="btn" id="buy-button">Thanh toán</a>
      </div>
    </div>
  )
}
