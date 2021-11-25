/* eslint-disable react/prop-types */
import React from 'react'
import './popup.css'
import updateStatusOfOrder from '../../../../utils/updateOrder'

export default function Popup({
  orderID,
  address,
  close,
  status,
  DetailList,
  phoneNumber,
  setStatus
}) {
  const handleChangeStatus = (event) => {
    setStatus(event.target.value)
  }

  const updateDetails = (id, stat) => {
    updateStatusOfOrder(id, stat)
    close()
  }

  return (
    <div id="order-pop-up-container">
      <div id="order-pop-up-content">
        <div id="address-bar-order">
          <div id="address-bar-order-title">
            Địa chỉ giao hàng:
            {' '}
            <span id="address-bar-order-address">{address}</span>
            {' '}
            Số điện thoại
            người nhận:
            {' '}
            <span id="address-bar-order-phone">{phoneNumber}</span>
          </div>
          <div id="order-status">
            Trạng thái đơn hàng:
            {' '}
            <span id="address-bar-order-status">
              <select
                id="status-selector"
                value={status}
                onChange={(event) => handleChangeStatus(event)}
              >
                <option value="waiting">Chờ xác nhận</option>
                <option value="shipping">Đang giao</option>
                <option value="done">Đã giao</option>
                <option value="cancel">Hủy</option>
              </select>
            </span>
          </div>
        </div>
        <div className="hr" />
        <div id="detail-order-list-item">{DetailList()}</div>
        <div id="close-detail-btn-area">
          <button
            type="button"
            className="btn"
            id="save-detail-btn"
            onClick={() => updateDetails(orderID, status)}
          >
            Cập nhật
          </button>
          <button type="button" className="btn" id="close-detail-btn" onClick={close}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
