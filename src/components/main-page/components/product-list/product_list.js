import React, { useEffect, useState } from 'react'
import './product_list.css'
import ProductTemplate from '../product-template/product_template'
import getProduct from '../../../../utils/getProduct'

export default function ProductList() {
  const [products, setProducts] = useState(false)
  useEffect(() => {
    getProduct()
      .then((data) => {
        setProducts(data)
      })
  }, [])

  const productList = (prod) => {
    if (prod) return prod.map((product) => <ProductTemplate prop={product} />)
    return null
  }

  return (
    <div id="best-products-list">
      <div id="best-products-area-title">Sản phẩm nổi bật</div>
      <div id="best-products-items">
        {productList(products)}
      </div>
    </div>
  )
}
