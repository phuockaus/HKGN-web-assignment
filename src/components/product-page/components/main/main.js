/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import MiniRouter from '../mini-router/mini-router'
import Product from '../product/product'
import { AppContext } from '../../../../utils/contextControl'
import './main.css'

export default function Main({ productId }) {
  const { productList } = useContext(AppContext)
  const getProduct = (prodList, prodId) => {
    if (prodList) return prodList.filter((prod) => parseInt(prod.product_ID, 10) === parseInt(prodId, 10))
    return []
  }
  const product = getProduct(productList, productId)

  const miniRouter = (prod) => {
    if (prod) return <MiniRouter props={product[0]} />
    return null
  }
  const showproduct = (prod) => {
    if (prod) return <Product props={product[0]} />
    return null
  }

  return (
    <div id="main-container">
      <div id="product-info-content-area">
        <div id="mini-router-area">
          {miniRouter(productList)}
        </div>
        <div id="info-area">
          {showproduct(productList)}
        </div>
      </div>
    </div>
  )
}
