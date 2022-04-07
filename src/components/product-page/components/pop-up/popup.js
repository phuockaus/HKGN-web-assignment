/* eslint-disable react/prop-types */
import React from 'react'
import './popup.css'

export default function Popup({ message }) {
  return (
    <div id="product-pop-up-container">
      <div id="product-pop-up-content">
        {message}
      </div>
    </div>
  )
}
