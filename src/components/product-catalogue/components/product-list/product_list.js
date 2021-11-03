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
    <div id="best-products-list">
      <div id="best-products-area-title">Sản phẩm nổi bật</div>
      <div id="best-products-items">
        {prodList(filterProducts)}
      </div>
    </div>
  )
}
