/* eslint-disable react/prop-types */
import React from 'react'
import './product_list.css'
import ProductTemplate from '../product-template/product_template'

export default function ProductsList({ filterProducts }) {
  const prodList = (prod) => {
    if (prod) return prod.map((product) => <ProductTemplate prop={product} />)
    return null
  }

  return (
    <div id="catalogue-products-list">
      <div id="catalogue-products-area-title">Danh mục sản phẩm</div>
      <div id="catalogue-products-items">
        {prodList(filterProducts)}
      </div>
    </div>
  )
}
