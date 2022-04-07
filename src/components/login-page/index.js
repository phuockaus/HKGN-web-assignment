import React from 'react'
import Main from './components/main/main'
import Header from './components/header/header'
import './components/main/main.css'

export default function Login() {
  return (
    <div className="LoginPage">
      <Header />
      <div className="MiddlePage">
        <Main />
      </div>
    </div>
  )
}
