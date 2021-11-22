import React from 'react'
import './guest.css'
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'
import {
  faCartPlus
} from '@fortawesome/free-solid-svg-icons'

export default function GuestButtons() {
  const checkLogin = () => {
    document.getElementById('nav-pop-up-container').style.display = 'block'
    setTimeout(() => {
      document.getElementById('nav-pop-up-container').style.animationName = 'fadeOut'
      document.getElementById('nav-pop-up-container').style.animationDuration = '0.3s'
      setTimeout(() => {
        document.getElementById('nav-pop-up-container').style.animationName = 'none'
        document.getElementById('nav-pop-up-container').style.animationDuration = 'none'
        document.getElementById('nav-pop-up-container').style.display = 'none'
      }, 200)
    }, 1000)
  }
  return (
    <div id="guest-buttons">
      <div id="guest-auth">
        <a className="buttons-bar" href="/signup">Đăng ký</a>
        <div className="blank">|</div>
        <a className="buttons-bar" href="/login">Đăng nhập</a>
      </div>
      <div id="cart-button">
        <FontAwesomeIcon icon={faCartPlus} id="cart-icon" onClick={checkLogin} />
      </div>
    </div>
  )
}
