/* eslint-disable react/prop-types */
import React from 'react'
import ProductCartTemplate from '../product-template/template'
import './product_list.css'

export default function ProductInCartList({
  products, totalPrice, amount, discount
}) {
  const getProductList = () => {
    if (products) return products.map((product) => <ProductCartTemplate props={product} />)
    return null
  }
  const getFinalDiscount = () => amount * 200 * Number(discount)
  // eslint-disable-next-line max-len
  const getFinalPrice = () => ((getFinalDiscount() > totalPrice) ? 0 : (totalPrice - getFinalDiscount()))
  return (
    <div id="product-list-cart-container">
      <div id="product-list-cart-header">
        <div id="empty-title">Thông tin đơn hàng</div>
        <div className="hr" style={{ 'margin-top': '30px' }} />
      </div>
      <div id="product-cart-list-content">
        {getProductList()}
      </div>
      <div className="hr" />
      <div id="temp-total">
        <div id="temp-total-title">Tổng cộng</div>
        <div id="temp-total-price">
          {totalPrice}
          {' '}
          đồng
        </div>
      </div>
      <div id="temp-discount">
        <div id="temp-discount-title">Giảm giá</div>
        <div id="temp-discount-price">
          {'- '}
          {getFinalDiscount()}
          {' '}
          đồng
        </div>
      </div>
      <div className="hr" />
      <div id="final-total">
        <div id="final-total-title">Thành tiền</div>
        <div id="final-total-price">
          {getFinalPrice()}
          {' '}
          đồng
        </div>
      </div>
    </div>
  )
}
