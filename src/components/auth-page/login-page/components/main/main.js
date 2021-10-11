import React from 'react'
import Form from '../login-form/form'
import submit from '../../../../../utils/login'

export default function Main() {
  return (
    <div>
      <Form signup={submit} />
    </div>
  )
}
