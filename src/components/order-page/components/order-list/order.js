/* eslint-disable react/prop-types */
import React from 'react'
// import { AppContext } from '../../../../utils/contextControl'
import OrderTemplate from '../template/template'
import './order.css'

export default function OrderList({ orderList }) {
  // const { productList } = useContext(AppContext)
  const getOrderList = () => {
    if (orderList) return orderList.map((order) => <OrderTemplate props={order} />)
    return null
  }
  return (
    <div id="order-list-container">
      <div id="order-list-title">
        <div className="orlt" id="orl-title1">Mã đơn hàng</div>
        <div className="orlt" id="orl-title2">Ngày đặt hàng</div>
        <div className="orlt" id="orl-title3">Thành tiền</div>
        <div className="orlt" id="orl-title4">Tình trạng đơn hàng</div>
      </div>
      <div id="order-list-content">
        {getOrderList()}
      </div>
    </div>
  )
}
