import React from 'react'
import './quantity-control.css'

export default function quantityControl() {
  return (
    <form id="quantity-control">
      <input id="quantity" type="number" min="1" />
    </form>
  )
}
