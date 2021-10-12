import React from 'react'
import './header.css'
import Logo from '../../assets/logo.jpg'

export default function Header() {
  return (
    <div id="Header">
      <img src={Logo} alt="Logo" id="Logo" />
    </div>
  )
}
