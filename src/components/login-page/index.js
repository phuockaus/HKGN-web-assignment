import React from 'react'
import Header from './components/header/header'
import Main from './components/main/main'

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
