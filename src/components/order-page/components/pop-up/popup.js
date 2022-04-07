/* eslint-disable react/prop-types */
import React from 'react'
import './popup.css'

export default function Popup({
  address, close, status, DetailList
}) {
  return (
    <div id="order-pop-up-container">
      <div id="order-pop-up-content">
        <div id="address-bar-order">
          <div id="address-bar-order-title">
            Địa chỉ giao hàng:
            {' '}
            <span id="address-bar-order-address">{address}</span>
          </div>
          <div id="order-status">
            Trạng thái đơn hàng:
            {' '}
            <span id="address-bar-order-status">{status}</span>
          </div>
        </div>
        <div className="hr" />
        <div id="detail-order-list-item">
          {DetailList()}
        </div>
        <div id="close-detail-btn-area">
          <button type="button" className="btn" id="close-detail-btn" onClick={close}>Close</button>
        </div>
      </div>
    </div>
  )
}
