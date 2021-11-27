/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React from 'react'
import Navbar from '../nav-bar'
import Main from './components/main/main'

export default function News(prop) {
  return (
    <div>
      <Navbar />
      <Main newsID={prop.match.params.newsid} />
    </div>
  )
}
