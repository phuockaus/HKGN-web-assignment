/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react'
import Navbar from '../nav-bar'
import Main from './components/main/main'

export default function ProductInfo(props) {
  return (
    <div>
      <Navbar />
      <Main productId={props.match.params.id} />
    </div>
  )
}
