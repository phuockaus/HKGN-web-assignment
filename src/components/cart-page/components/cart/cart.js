import React, { useContext, useEffect, useState } from 'react'
import ProductInCart from '../product-in-cart/product-in-cart'
import { AppContext } from '../../../../utils/contextControl'
import './cart.css'

export default function CartItems() {
  const {
    cart, addItemToCart, removeItemFromCart, productList
  } = useContext(AppContext)
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
    addItemToCart({
      productID: id,
      quantity: -1
    })
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
    addItemToCart({
      productID: id,
      quantity: 1
    })
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

  return (
    <div id="cart-list-container">
      <div id="list-header">
        <div className="header1">Đơn giá</div>
        <div className="header">Số lượng</div>
        <div className="header">Thành tiền</div>
        <div className="header">Xóa</div>
      </div>
      <div id="product-list-container">
        {renderItemList()}
      </div>
      <div id="controler">
        <div id="totalprice">
          <span>Tổng cộng: </span>
          {totalPrice}
          <span> đồng</span>
        </div>
        <a href="/payment" className="btn" id="buy-button">Mua hàng</a>
      </div>
    </div>
  )
}
