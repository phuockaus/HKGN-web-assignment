import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom'
import React from 'react'
import Navbar from '../nav-bar'
import MainCart from './components/main/main'

export default function Cart() {
  if (!Cookies.get('accountID')) return <Redirect to="/login" />
  return (
    <div>
      <Navbar />
      <MainCart />
    </div>
  )
}
