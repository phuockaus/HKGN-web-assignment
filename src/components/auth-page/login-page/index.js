import React from 'react'
import './login-page.css'
import Header from './components/header/header'
import Form from './components/login-form/form'

export default function Login() {
  return (
    <div className="LoginPage">
      <Header />
      <div className="MiddlePage">
        <Form />
      </div>
    </div>
  )
}
