import React from 'react'
import Header from '../login-page/components/header/header'
import BackButton from './components/back-button/back_button'
import Main from './components/main/main'

export default function Signup() {
  return (
    <div>
      <BackButton />
      <Header />
      <Main />
    </div>
  )
}
