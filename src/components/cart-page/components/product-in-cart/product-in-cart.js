/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext, useState, useEffect } from 'react'
import './product-in-cart.css'
import { AppContext } from '../../../../utils/contextControl'

export default function ProductInCart({
  props, cartPrice, setPrice
}) {
  const {
    productList, removeItemFromCart, addItemToCart
  } = useContext(AppContext)

  const [tempProductList, setTempProductList] = useState(productList.find((products) => products.product_ID === props.productID))
  const [tempItem, setTempItem] = useState({
    productID: props.productID,
    quantity: parseInt(props.quantity, 10),
    price: parseInt(tempProductList.cost, 10),
    totalPrice: parseInt(props.quantity, 10) * parseInt(tempProductList.cost, 10)
  })
  // useEffect(() => {
  //   if (tempProductList) {
  //     setTempProductList(productList.find((products) => products.product_ID === props.productID))
  //     setTempItem({
  //       productID: props.productID,
  //       quantity: parseInt(props.quantity, 10),
  //       price: parseInt(tempProductList.cost, 10),
  //       totalPrice: parseInt(props.quantity, 10) * parseInt(tempProductList.cost, 10)
  //     })
  //   }
  // }, [])

  console.log(props)
  console.log(tempProductList)
  console.log(tempItem)
  const removeItem = (itemID) => {
    setPrice(cartPrice - tempItem.totalPrice)
    removeItemFromCart(itemID)
    // document.getElementsByName(props.productID)[0].style.display = 'none'
  }

  const decrease = () => {
    setTempItem({
      ...tempItem,
      quantity: (tempItem.quantity > 1 ? tempItem.quantity - 1 : 1),
      totalPrice: (
        tempItem.quantity > 1
          ? tempItem.totalPrice - parseInt(tempProductList.cost, 10)
          : tempItem.totalPrice
      )
    })
    addItemToCart({
      productID: tempItem.productID,
      quantity: -1
    })
    setPrice(
      (tempItem.quantity > 1 ? cartPrice - parseInt(tempProductList.cost, 10) : cartPrice)
    )
  }
  const increase = () => {
    setTempItem({
      ...tempItem,
      quantity: (
        tempItem.quantity < tempProductList.stock ? tempItem.quantity + 1 : tempItem.quantity
      ),
      totalPrice: (
        tempItem.quantity < tempProductList.stock
          ? tempItem.totalPrice + parseInt(tempProductList.cost, 10) : tempItem.totalPrice
      )
    })
    if (tempItem.quantity < tempProductList.stock) {
      addItemToCart({
        productID: tempItem.productID,
        quantity: 1
      })
    }
    setPrice(
      tempItem.quantity < tempProductList.stock
        ? cartPrice + parseInt(tempProductList.cost, 10) : cartPrice
    )
  }

  return (
    <div id="product-in-cart-container" name={tempProductList.product_ID}>
      <div id="product-img-in-cart-container">
        <img src={tempProductList.image_link} alt="product" id="product-in-cart-img" />
      </div>
      <div id="product-in-cart-name">{tempProductList.name}</div>
      <div id="in-cart-price">
        <div>
          {tempItem.price}
          <span> đồng</span>
        </div>
      </div>
      <div id="in-cart-quantity">
        <input
          id="decrease-btn"
          className="quantity-btn"
          type="button"
          value="-"
          onClick={() => decrease()}
        />
        {tempItem.quantity}
        <input
          id="increase-btn"
          className="quantity-btn"
          type="button"
          value="+"
          onClick={() => increase()}
        />
      </div>
      <div id="in-cart-total">
        <div>
          {tempItem.totalPrice}
          <span> đồng</span>
        </div>
      </div>
      <div id="in-cart-removeItem">
        <input
          id="removeButton"
          className="remove-button"
          type="button"
          value="Xóa"
          onClick={() => {
            removeItem(props.productID)
          }}
        />
      </div>
    </div>
  )
}
