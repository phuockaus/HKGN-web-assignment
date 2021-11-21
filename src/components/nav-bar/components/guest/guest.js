import React from 'react'
import './guest.css'
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'
import {
  faCartPlus
} from '@fortawesome/free-solid-svg-icons'

export default function GuestButtons() {
  return (
    <div id="guest-buttons">
      <div id="guest-auth">
        <a className="buttons-bar" href="/signup">Đăng ký</a>
        <div className="blank">|</div>
        <a className="buttons-bar" href="/login">Đăng nhập</a>
      </div>
      <div id="cart-button">
        <FontAwesomeIcon icon={faCartPlus} id="cart-icon" />
      </div>
    </div>
  )
}
