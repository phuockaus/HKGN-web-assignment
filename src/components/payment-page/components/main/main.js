import React from 'react'
import AddressBar from '../address-bar/address_bar'
import SubmitPayment from '../order-submit/submit'
import ProductInCartList from '../product-list/product_list'
import './main.css'

export default function Main() {
  return (
    <div id="payment-page-container">
      {/* <h2>Thanh toán</h2> */}
      <div id="payment-page-addressbar">
        <AddressBar />
      </div>
      <div id="payment-page-productlist">
        <ProductInCartList />
      </div>
      <div id="payment-page-submit">
        <SubmitPayment />
      </div>
    </div>
  )
}
