import React, { useState } from 'react'
import './form.css'
import login from '../../../../../utils/login'

export default function Form() {
  const [details, setDetails] = useState({
    phoneNumber: '', password: ''
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    document.getElementById('signup-error').innerHTML = login(details)
  }

  const handleFocus = () => {
    document.getElementById('signup-error').innerHTML = ' '
  }

  return (
    <div id="Form">
      <div id="FormHeader">Đăng nhập</div>
      <form onSubmit={handleSubmit}>
        <div className="textContainer">
          <input
            type="tel"
            required
            placeholder="Số điện thoại"
            onChange={(event) => {
              setDetails({ ...details, phoneNumber: event.target.value })
            }}
            onFocus={handleFocus}
          />
        </div>
        <div className="textContainer">
          <input
            type="password"
            required
            placeholder="Mật khẩu"
            onChange={(event) => setDetails({ ...details, pass: event.target.value })}
            onFocus={handleFocus}
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
