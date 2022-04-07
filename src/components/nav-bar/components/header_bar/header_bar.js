import React from 'react'
import './header_bar.css'
import Cookies from 'js-cookie'
import MenuBar from '../menu_bar/menu_bar'
import Logo from './assets/logo.jpg'
import GuestButtons from '../guest/guest'
import MemberButtons from '../member/member'
import Popup from '../pop-up/popup'

export default function HeaderBar() {
  const userbutton = () => {
    if (Cookies.get('accountID')) {
      return <MemberButtons />
    }
    return <GuestButtons />
  }
  return (
    <div id="header_bar">
      <Popup />
      <div id="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div id="header-user-button">
        {userbutton()}
      </div>
      <div id="header-bar-menu-bar">
        <MenuBar />
      </div>
    </div>
  )
}
