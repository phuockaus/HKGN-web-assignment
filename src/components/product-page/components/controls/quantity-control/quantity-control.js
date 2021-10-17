import React from 'react'
import './quantity-control.css'

export default function quantityControl() {
  document.getElementById('quantity').value = 1
  return (
    <form id="quantity-control">
      <button type="button" title="Down">-</button>
      <input id="quantity" type="number" min="1" />
      <button type="button" title="Up">+</button>
    </form>
  )
}
