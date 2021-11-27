/* eslint-disable max-len */
import Cookies from 'js-cookie'
import React from 'react'
import { Redirect } from 'react-router-dom'
import Navbar from '../nav-bar'
import Main from './components/main/main'

export default function OrderPage() {
  if (!Cookies.get('accountID')) return <Redirect to="/login" />
  return (
    <div>
      <Navbar />
      <Main />
    </div>
  )
}
