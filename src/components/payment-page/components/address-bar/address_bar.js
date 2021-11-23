import Cookies from 'js-cookie'
import React from 'react'
import { decode } from 'string-encode-decode'
import './address_bar.css'

export default function AddressBar() {
  const name = `${decode(Cookies.get('firstName'))} ${decode(Cookies.get('lastName'))}`
  const phone = decode(Cookies.get('phoneNumber'))
  const address = decode(Cookies.get('address'))
  return (
    <div id="address-bar-container">
      <div id="address-bar-address-title">Thông tin nhận hàng</div>
      <div>
        <div id="address-bar-col-1">
          <div id="address-bar-title-1">Tên khách hàng:</div>
          <div id="address-user-name">{name}</div>
          <div id="address-bar-title-2">Số điện thoại:</div>
          <div id="address-phone-number">{phone}</div>
        </div>
        <div id="address-bar-col-2">
          <div id="address-bar-title-3">Địa chỉ giao hàng:</div>
          <div id="address-bar-address">{address}</div>
          <a href="/account-info" id="payment-edit-address">Chỉnh sửa</a>
        </div>
      </div>
    </div>
  )
}
