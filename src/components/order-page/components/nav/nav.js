/* eslint-disable react/prop-types */
import React from 'react'
import './nav.css'

export default function Nav({ setFilter }) {
  const reset = () => {
    const btnList = document.getElementsByClassName('btn-status')
    for (let i = 0; i < btnList.length; i += 1) {
      btnList[i].style.borderBottom = '5px solid var(--white_background)'
      btnList[i].style.color = 'var(--dark_gray)'
    }
  }
  const select1 = () => {
    reset()
    document.getElementById('order-page-nav-btn1').style.borderBottom = '5px solid var(--light_blue)'
    document.getElementById('order-page-nav-btn1').style.color = 'var(--dark_blue)'
    setFilter('all')
  }
  const select2 = () => {
    reset()
    document.getElementById('order-page-nav-btn2').style.borderBottom = '5px solid var(--light_blue)'
    document.getElementById('order-page-nav-btn2').style.color = 'var(--dark_blue)'
    setFilter('waiting')
  }
  const select3 = () => {
    reset()
    document.getElementById('order-page-nav-btn3').style.borderBottom = '5px solid var(--light_blue)'
    document.getElementById('order-page-nav-btn3').style.color = 'var(--dark_blue)'
    setFilter('shipping')
  }
  const select4 = () => {
    reset()
    document.getElementById('order-page-nav-btn4').style.borderBottom = '5px solid var(--light_blue)'
    document.getElementById('order-page-nav-btn4').style.color = 'var(--dark_blue)'
    setFilter('done')
  }
  const select5 = () => {
    reset()
    document.getElementById('order-page-nav-btn5').style.borderBottom = '5px solid var(--light_blue)'
    document.getElementById('order-page-nav-btn5').style.color = 'var(--dark_blue)'
    setFilter('canceled')
  }
  return (
    <div id="order-page-nav">
      <button type="button" className="btn-status" id="order-page-nav-btn1" onClick={select1}>Tất cả</button>
      <button type="button" className="btn-status" id="order-page-nav-btn2" onClick={select2}>Chờ xác nhận</button>
      <button type="button" className="btn-status" id="order-page-nav-btn3" onClick={select3}>Đang vận chuyển</button>
      <button type="button" className="btn-status" id="order-page-nav-btn4" onClick={select4}>Đã giao</button>
      <button type="button" className="btn-status" id="order-page-nav-btn5" onClick={select5}>Hủy</button>
    </div>
  )
}
