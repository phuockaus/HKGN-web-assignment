/* eslint-disable arrow-body-style */
import React from 'react'
import Cookies from 'js-cookie'
import { decode } from 'string-encode-decode'
import { Redirect } from 'react-router-dom'
import Navbar from '../nav-bar/index'
import MainContent from './main-content/index'

export default function AdminPage() {
  if (String(decode(Cookies.get('role') !== 'admin'))) return <Redirect to="/home" />
  return (
    <div>
      <Navbar />
      <MainContent />
    </div>
  )
}
