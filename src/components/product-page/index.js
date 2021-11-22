/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import Navbar from '../nav-bar'
import Main from './components/main/main'
import Popup from './components/pop-up/popup'

export default function ProductInfo(props) {
  const [message, setMessage] = useState('')
  const pop = () => {
    document.getElementById('product-pop-up-container').style.display = 'block'
    setTimeout(() => {
      document.getElementById('product-pop-up-container').style.animationName = 'fadeOut'
      document.getElementById('product-pop-up-container').style.animationDuration = '0.3s'
      setTimeout(() => {
        document.getElementById('product-pop-up-container').style.animationName = 'none'
        document.getElementById('product-pop-up-container').style.animationDuration = 'none'
        document.getElementById('product-pop-up-container').style.display = 'none'
      }, 200)
    }, 1000)
  }
  const notify = (mes) => {
    setMessage(mes)
    pop()
  }
  return (
    <div>
      <Navbar />
      <Popup message={message} />
      <Main productId={props.match.params.id} notify={notify} />
    </div>
  )
}
