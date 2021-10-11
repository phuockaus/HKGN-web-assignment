import React, { useState } from 'react'
import './form.css'
import login from '../../../../../utils/login'

export default function Form() {
  const [details, setDetails] = useState({
    phone_number: '', password: ''
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    login(details)
  }

  // const handleFocus = () => {
  //   document.getElementById('signup-error').innerHTML = ''
  // }

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
              setDetails({ ...details, phone_number: event.target.value })
            }}
            // onFocus={handleFocus}
          />
        </div>
        <div className="textContainer">
          <input
            type="password"
            required
            placeholder="Mật khẩu"
            onChange={(event) => setDetails({ ...details, password: event.target.value })}
            // onFocus={handleFocus}
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
