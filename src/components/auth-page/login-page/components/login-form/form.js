import React from 'react'
import './form.css'

export default function Form() {
  return (
    <div id="Form">
      <div id="FormHeader">Đăng nhập</div>
      <form>
        <div className="textContainer">
          <input
            type="text"
            required
            placeholder="Số điện thoại"
          />
        </div>
        <div className="textContainer">
          <input
            type="password"
            required
            placeholder="Mật khẩu"
          />
        </div>
        <div id="LoginButton">
          <input type="submit" value="Đăng nhập" />
        </div>
        <div id="SignUp">
          <div>Chưa có tài khoản? </div>
          <div><a href="www.google.com">Đăng ký </a></div>
        </div>
      </form>
    </div>
  )
}
