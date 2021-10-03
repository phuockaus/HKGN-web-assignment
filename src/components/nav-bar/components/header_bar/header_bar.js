import React from 'react'
import './header_bar.css'
// import {
//   BsFillCartPlusFill
// } from 'react-icons/bs'
import AuthGuestButtons from '../auth_guest_buttons/auth_guest_buttons'

export default function HeaderBar() {
  return (
    <div id="header_bar">
      <div id="logo" />
      <AuthGuestButtons />
      <div id="cart-button" />
    </div>
  )
}
