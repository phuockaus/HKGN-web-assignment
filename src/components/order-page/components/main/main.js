import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { decode } from 'string-encode-decode'
import getOrderList from '../../../../utils/getOrder'
import Nav from '../nav/nav'
import OrderList from '../order-list/order'

import './main.css'

export default function Main() {
  const [orderList, setOrderList] = useState(false)
  const [status, setStatus] = useState('all')
  const accountID = decode(Cookies.get('accountID'))

  useEffect(() => {
    getOrderList(accountID)
      .then((data) => {
        setOrderList(data)
      })
  }, [])

  const filterOrder = () => {
    if (orderList) {
      switch (status) {
        case 'all':
          return orderList
        default:
          return orderList.filter((order) => order.status === status)
      }
    }
    return null
  }
  return (
    <div id="order-page-container">
      <div id="order-page-title">Đơn hàng của tôi</div>
      <div id="order-page-nav">
        <Nav setStatus={setStatus} />
      </div>
      <div id="order-page-order-list">
        <OrderList orderList={filterOrder()} />
      </div>
    </div>
  )
}
