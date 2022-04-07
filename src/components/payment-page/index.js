/* eslint-disable max-len */
import Cookies from 'js-cookie'
import React from 'react'
import { Redirect } from 'react-router-dom'
import Navbar from '../nav-bar'
import Main from './components/main/main'

export default function PaymentInfo() {
  if (!Cookies.get('accountID')) return <Redirect to="/login" />
  const cart = JSON.parse(Cookies.get('cart'))
  if (cart.length === 0) return <Redirect to="/cart" />
  return (
    <div>
      <Navbar />
      <Main />
    </div>
  )
}
