import React from 'react'
import ProductCartTemplate from '../product-template/template'
import './product_list.css'

export default function ProductInCartList() {
  return (
    <div id="product-list-cart-container">
      <div id="product-list-cart-header">
        <div id="empty-title">Thông tin giỏ hàng</div>
        <div id="product-list-cart-title-1">Đơn giá</div>
        <div id="product-list-cart-title-2">Số lượng</div>
        <div id="product-list-cart-title-3">Thành tiền</div>
      </div>
      <div id="product-cart-list-content">
        <ProductCartTemplate />
        <ProductCartTemplate />
      </div>
    </div>
  )
}
