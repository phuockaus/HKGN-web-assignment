import React from 'react'
import './header_bar.css'
// import {
//   IoAirplane
// } from 'react-icons/io5'
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'
import {
  faCartPlus
} from '@fortawesome/free-solid-svg-icons'

import AuthGuestButtons from '../auth_guest_buttons/auth_guest_buttons'
import MenuBar from '../menu_bar/menu_bar'
import Logo from './assets/logo.jpg'

export default function HeaderBar() {
  return (
    <div id="header_bar">
      <div id="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div id="navbar-buttons">
        <AuthGuestButtons />
        <div id="cart-button">
          <FontAwesomeIcon icon={faCartPlus} id="cart-icon" />
        </div>
      </div>
      <MenuBar />
    </div>
  )
}
