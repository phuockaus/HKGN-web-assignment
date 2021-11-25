/* eslint-disable react/prop-types */
import React from 'react'
import './success.css'

export default function SuccessPopUp({ message }) {
  return (
    <div id="success-pop-up-container">
      <div id="success-pop-up-content">
        <div id="success-pop-up-title">
          {message}
        </div>
        <div id="success-pop-up-btn">
          <a href="/" id="submit-note-success-btn1" className="btn">Về trang chủ</a>
          <a href="/order" id="submit-note-success-btn2" className="btn">Xem danh sách đơn hàng</a>
        </div>
      </div>
    </div>
  )
}
