import React from 'react'
import './auth_guest_buttons.css'

export default function AuthGuestButtons() {
  return (
    <div id="sign-in-container">
      <a className="buttons-bar" href="/login">Đăng ký</a>
      <div className="blank">|</div>
      <a className="buttons-bar" href="/login">Đăng nhập</a>
    </div>
  )
}
