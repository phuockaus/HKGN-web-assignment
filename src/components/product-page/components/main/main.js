import React from 'react'
import MiniRouter from '../mini-router/mini-router'
import Product from '../product/product'
import Controller from '../controls/controls'
import './main.css'

export default function Main() {
  return (
    <div id="main-container">
      <div>
        <MiniRouter />
        <Product />
        <Controller />
      </div>
    </div>
  )
}
