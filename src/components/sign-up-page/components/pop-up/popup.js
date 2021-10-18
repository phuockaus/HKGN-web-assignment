import React from 'react'
import './popup.css'

export default function Popup() {
  return (
    <div id="pop-up-container">
      <div id="pop-up-content">
        <h2>Đăng ký thành công</h2>
        <a className="button" href="/login">Đăng nhập</a>
      </div>
    </div>
  )
}
