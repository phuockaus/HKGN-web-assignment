import React from 'react'
import './signup.css'

export default function Signupform() {
  return (
    <div id="login_container">
      <h1 id="login_title">Đăng ký</h1>
      <form>
        <input
          className="item_container"
          type="tel"
          placeholder="Số điện thoại"
          name="phone"
        />
        <input
          className="item_container"
          type="email"
          placeholder="Email"
          name="mail"
        />
        <input
          className="item_container"
          type="password"
          placeholder="Mật khẩu"
          name="password"
        />
        <input
          className="item_container"
          type="password"
          placeholder="Xác nhận mật khẩu"
          name="repassword"
        />
        <input
          className="item_container"
          type="text"
          placeholder="Họ và tên"
          name="name"
        />
        <input
          className="item_container"
          type="text"
          placeholder="Địa chỉ"
          name="address"
        />
        <input className="button" type="submit" value="Đăng ký" />
        <div id="login-error" />
      </form>
    </div>
  )
}
