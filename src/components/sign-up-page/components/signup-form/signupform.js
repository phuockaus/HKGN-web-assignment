import React, { useState } from 'react'
import './signupform.css'
import submit from '../../../../utils/signup'

export default function Signupform() {
  const [details, setDetails] = useState({
    phone: '', email: '', pass: '', re_pass: '', fname: '', lname: '', address: ''
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    document.getElementById('signup-error').innerHTML = submit(details)
  }

  const handleFocus = () => {
    document.getElementById('signup-error').innerHTML = ''
  }

  return (
    <div id="signup_container">
      <h1 id="signup_title">Đăng ký</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="item_container"
          type="tel"
          placeholder="Số điện thoại"
          name="phone"
          value={details.phone}
          onChange={(event) => {
            setDetails({ ...details, phone: event.target.value })
          }}
          onFocus={handleFocus}
        />
        <input
          className="item_container"
          type="email"
          placeholder="Email"
          name="mail"
          value={details.email}
          onChange={(event) => setDetails({ ...details, email: event.target.value })}
          onFocus={handleFocus}
        />
        <input
          className="item_container"
          type="password"
          placeholder="Mật khẩu"
          name="pass"
          value={details.pass}
          onChange={(event) => setDetails({ ...details, pass: event.target.value })}
          onFocus={handleFocus}
        />
        <input
          className="item_container"
          type="password"
          placeholder="Xác nhận mật khẩu"
          name="repass"
          value={details.re_pass}
          onChange={(event) => setDetails({ ...details, re_pass: event.target.value })}
          onFocus={handleFocus}
        />
        <input
          className="item_container"
          type="text"
          placeholder="Họ"
          name="name"
          value={details.lname}
          onChange={(event) => setDetails({ ...details, lname: event.target.value })}
          onFocus={handleFocus}
        />
        <input
          className="item_container"
          type="text"
          placeholder="Tên"
          name="name"
          value={details.fname}
          onChange={(event) => setDetails({ ...details, fname: event.target.value })}
          onFocus={handleFocus}
        />
        <input
          className="item_container"
          type="text"
          placeholder="Địa chỉ"
          name="address"
          value={details.address}
          onChange={(event) => setDetails({ ...details, address: event.target.value })}
          onFocus={handleFocus}
        />
        <input className="button" id="sign-up-button" type="submit" value="Đăng ký" />
      </form>
      <div id="signup-error" />
    </div>
  )
}
