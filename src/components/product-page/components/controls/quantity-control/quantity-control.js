import React from 'react'
import './quantity-control.css'

export default function quantityControl({ props }) {
  const max = props
  return (
    <form id="quantity-control">
      <input id="quantity" type="number" min="1" max={max} />
    </form>
  )
}
