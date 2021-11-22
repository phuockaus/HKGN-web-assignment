import React from 'react'
import './address_bar.css'

export default function AddressBar() {
  return (
    <div id="address-bar-container">
      <div id="address-bar-address-title">Địa chỉ nhận hàng</div>
      <div>
        <div id="address-bar-col-1">
          <div id="address-bar-title-1">Tên khách hàng:</div>
          <div id="address-user-name">Ngô Cao Trinh</div>
          <div id="address-bar-title-2">Số điện thoại:</div>
          <div id="address-phone-number">0123456789</div>
        </div>
        <div id="address-bar-col-2">
          <div id="address-bar-title-3">Địa chỉ giao hàng:</div>
          <div id="address-bar-address">Ký túc xá khu A ĐHQG-HCM</div>
          <a href="/" id="payment-edit-address">Chỉnh sửa</a>
        </div>
      </div>
    </div>
  )
}
