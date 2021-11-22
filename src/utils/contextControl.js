/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/destructuring-assignment */
import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const AppContext = createContext()

export const AppProvider = (props) => {
  const [productList, setProductList] = useState()
  const [cart, setCart] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  async function fetchProductList() {
    try {
      const response = await axios.get('http://localhost:3000/product')
      setProductList(response.data)
      setFilterProducts(response.data)
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
    let ele
    for (ele of processingCart) {
      if (ele.productID === item.productID) {
        let tempQuantity = Number(ele.quantity)
        tempQuantity += Number(item.quantity)
        ele.quantity = tempQuantity
        if (ele.quantity < 1) {
          ele.quantity = 1
        }
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
    let ele
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
