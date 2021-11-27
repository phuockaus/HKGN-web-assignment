import React from 'react'
import './menu_bar.css'

export default function MenuBar() {
  return (
    <div id="menu-bar-container">
      <a className="buttons-bar" href="/home">Trang chủ</a>
      <div className="blank">|</div>
      <a className="buttons-bar" href="/catalogue">Danh mục sản phẩm</a>
      <div className="blank">|</div>
      <a className="buttons-bar" href="/news">Tin tức</a>
    </div>
  )
}
