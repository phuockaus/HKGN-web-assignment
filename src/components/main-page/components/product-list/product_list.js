import React from 'react'
import './product_list.css'
import ProductTemplate from '../product-template/product_template'

export default function ProductList() {
  const products = ([
    {
      name: 'P1'
    },
    {
      name: 'P2'
    },
    {
      name: 'P3'
    },
    {
      name: 'P4'
    },
    {
      name: 'P5'
    },
    {
      name: 'P6'
    }
  ])
  const productList = products.map((product) => <ProductTemplate prop={product.name} />)
  return (
    <div id="best-products-list">
      <div id="best-products-area-title">Sản phẩm nổi bật</div>
      <div id="best-products-items">
        {productList}
      </div>
    </div>
  )
}
