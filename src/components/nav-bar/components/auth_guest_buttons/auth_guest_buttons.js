import React from 'react'
import './auth_guest_buttons.css'

export default function AuthGuestButtons() {
  return (
    <div id="sign-in-container">
      <a id="sign-up-button" href="/login">Đăng ký</a>
      <div id="blank">|</div>
      <a id="login-button" href="/login">Đăng nhập</a>
    </div>
  )
}
