/* eslint-disable react/prop-types */
import React from 'react'
import './popup.css'

export default function Popup({ message }) {
  const cancel = () => {
    document.getElementById('payment-pop-up-container').style.display = 'none'
  }
  return (
    <div id="payment-pop-up-container">
      <div id="payment-pop-up-content">
        {message}
        <div id="payment-pop-up-btn">
          <a href="/" id="submit-note-payment-btn1" className="btn">Xác nhận</a>
          <button type="button" id="submit-note-payment-btn2" className="btn" onClick={cancel}>Hủy</button>
        </div>
      </div>
    </div>
  )
}
