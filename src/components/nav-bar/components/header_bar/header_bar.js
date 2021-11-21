import React from 'react'
import './header_bar.css'
import MenuBar from '../menu_bar/menu_bar'
import Logo from './assets/logo.jpg'
// import GuestButtons from '../guest/guest'
import MemberButtons from '../member/member'

export default function HeaderBar() {
  return (
    <div id="header_bar">
      <div id="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div id="header-user-button">
        <MemberButtons />
      </div>
      <div id="header-bar-menu-bar">
        <MenuBar />
      </div>
    </div>
  )
}
