import Cookies from 'js-cookie'
import React from 'react'
import { Redirect } from 'react-router-dom'
import Form from '../login-form/form'

export default function Main() {
  if (Cookies.get('accountID')) {
    return <Redirect to="/home" />
  }
  return (
    <div>
      <Form />
    </div>
  )
}
