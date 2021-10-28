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
  const [searchProducts, setFilterProducts] = useState()

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

  const filterProducts = (filter) => {
    let list = productList
    if (filter.search_name !== '') list = list.filter((prod) => prod.name.toLowerCase().includes(filter.search_name.toLowerCase()))
    if (filter.cate_1 || filter.cate_2 || filter.cate_3 || filter.cate_4) {
      if (!filter.cate_1) list = list.filter((prod) => prod.category !== 'caphebot')
      if (!filter.cate_2) list = list.filter((prod) => prod.category !== 'caphehoatan')
      if (!filter.cate_3) list = list.filter((prod) => prod.category !== 'dungcucaphe')
      if (!filter.cate_4) list = list.filter((prod) => prod.category !== 'mayphacaphe')
    }
    setFilterProducts(list)
  }

  return (
    <AppContext.Provider
      value={{
        cart,
        productList,
        addItemToCart,
        removeItemFromCart,
        isLoggedIn,
        setIsLoggedIn,
        searchProducts,
        filterProducts
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppProvider
