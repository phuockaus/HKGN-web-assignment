/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/destructuring-assignment */
import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const AppContext = createContext()

const AppProvider = (props) => {
  const [productList, setProductList] = useState()
  const [cart, setCart] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  // each element in cart is in the form of
  // {
  //   productID: x,
  //   quantity: y
  // }

  async function fetchProductList() {
    try {
      const response = axios.get('http://localhost:3000/product')
      setProductList(response.data)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
    }
  }

  useEffect(() => {
    fetchProductList()
  }, [])

  const addItemToCart = (item) => {
    // item is in form of a JSON object same as ele in cart
    const processingCart = cart
    let checkDuplicate = false
    for (ele of processingCart) {
      if (ele.productID === item.productID) {
        ele.quantity += item.quantity
        checkDuplicate = true
        break
      }
    }
    if (!checkDuplicate) {
      processingCart.push(item)
    }
    setCart(processingCart)
  }

  const removeItemFromCart = (productID) => {
    const processingCart = cart
    for (ele of processingCart) {
      if (ele.productID === productID) {
        const index = processingCart.indexOf(ele)
        if (index > -1) {
          processingCart.splice(index, 1)
        }
        break
      }
    }
  }

  return (
    <AppContext.Provider
      value={{
        cart,
        productList,
        addItemToCart,
        removeItemFromCart,
        isLoggedIn,
        setIsLoggedIn
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppProvider
