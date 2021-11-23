import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { decode } from 'string-encode-decode'
import getOrderList from '../../../../utils/getOrder'
import Nav from '../nav/nav'
import Popup from '../pop-up/popup'
import OrderList from '../order-list/order'

import './main.css'

export default function Main() {
  const [orderList, setOrderList] = useState(false)
  const [filter, setFilter] = useState('all')
  const [status, setStatus] = useState(false)
  const [orderID, setOrderID] = useState()
  const [pop, setPop] = useState(false)
  const accountID = decode(Cookies.get('accountID'))

  useEffect(() => {
    getOrderList(accountID)
      .then((data) => {
        setOrderList(data)
      })
  }, [])

  const filterOrder = () => {
    if (orderList) {
      switch (filter) {
        case 'all':
          return orderList
        default:
          return orderList.filter((order) => order.status === filter)
      }
    }
    return null
  }

  const popup = () => {
    if (pop) {
      document.getElementById('order-pop-up-container').style.display = 'block'
    } else {
      document.getElementById('order-pop-up-container').style.display = 'none'
    }
  }

  useEffect(() => {
    popup()
  }, [pop])

  return (
    <div id="order-page-container">
      <div id="order-page-title">Đơn hàng của tôi</div>
      <div id="order-page-nav">
        <Nav setFilter={setFilter} />
      </div>
      <div id="order-page-order-list">
        <OrderList
          orderList={filterOrder()}
          setPop={setPop}
          setOrderID={setOrderID}
          setStatus={setStatus}
        />
      </div>
      <Popup
        orderID={orderID}
        status={status}
      />
    </div>
  )
}
