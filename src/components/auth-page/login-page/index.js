import React from 'react'
import './login-page.css'
import Header from './components/header/header'
import Form from './components/login-form/form'

export default function Login() {
  return (
    <div className="LoginPage">
      <Header />
      <div className="MiddlePage">
        <div className="NameLabel">
          {/* <h3 className="Name">CAFE HKGN </h3>
          <h4 className="Slogan">UỐNG CAFE ĐỂ KHÔNG MẤT GỐC </h4> */}
          {/* <img src={Logo} alt="Logo" id="BigLogo" /> */}
        </div>
        <Form />
      </div>
    </div>
  )
}
