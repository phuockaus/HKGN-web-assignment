import React from 'react'
import Signupform from '../signup-form/signupform'
import submit from '../../../utils/addAccount'
import './main.css'

export default function Main() {
  return (
    <div id="Signupform">
      <Signupform signup={submit} />
    </div>
  )
}
