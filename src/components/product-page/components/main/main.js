import React, { useState, useEffect } from 'react'
import MiniRouter from '../mini-router/mini-router'
import Product from '../product/product'
// import Controller from '../controls/controls'
import getProduct from '../../../../utils/getProduct'
import './main.css'

export default function Main() {
  const [products, setProducts] = useState(false)
  useEffect(() => {
    getProduct()
      .then((data) => {
        setProducts(data)
      })
  }, [])
  const miniRouter = (prod) => {
    if (prod) return <MiniRouter props={prod[0]} />
    return null
  }
  const showproduct = (prod) => {
    if (prod) return <Product props={prod[0]} />
    return null
  }
  // const controller = (prod) => {
  //   if (prod) return <Controller props={prod[0]} />
  //   return null
  // }
  return (
    <div id="main-container">
      <div>
        {miniRouter(products)}
        {showproduct(products)}
        {/* {controller(products)} */}
      </div>
    </div>
  )
}
