import React, { useState, useEffect, useContext } from 'react'
import { decode } from 'string-encode-decode'
import Cookies from 'js-cookie'
import './index.css'
import Nav from './nav/nav'
import Order from './order/order'
import Popup from './popup/popup'
import OrderDetail from './detail/detail'

import { AppContext } from '../../../utils/contextControl'
import getListProductOrder, { getAllOrder } from '../../../utils/getOrderProduct'

export default function OrderList() {
  const [orderList, setOrderList] = useState(false)
  const [filter, setFilter] = useState('all')
  const [pop, setPop] = useState(false)
  const [orderID, setOrderID] = useState(false)
  const [status, setStatus] = useState(false)
  const { productList } = useContext(AppContext)
  const [itemList, setItemList] = useState([])
  const [products, setProducts] = useState(false)
  const [address, setAddress] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const Id = decode(Cookies.get('accountID'))

  useEffect(() => {
    getListProductOrder(Id, orderID).then((data) => {
      setProducts(data)
    })
    getAllOrder().then((data) => {
      setOrderList(data)
    })
  }, [pop])

  useEffect(() => {
    getAllOrder().then((data) => {
      setOrderList(data)
    })
  }, [])

  const popup = () => {
    if (pop) {
      document.getElementById('order-pop-up-container').style.display = 'block'
      setTimeout(() => {
        document.getElementById('detail-order-list-item').style.display = 'block'
      }, 500)
    } else {
      document.getElementById('order-pop-up-container').style.display = 'none'
      document.getElementById('detail-order-list-item').style.display = 'none'
    }
  }

  useEffect(() => {
    popup()
  }, [pop])

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

  const getProductInfo = (id) => {
    if (productList) return productList.find((product) => product.product_ID === id)
    return null
  }

  const getItems = () => {
    const lst = []
    if (productList && products) {
      for (let i = 0; i < products.length; i += 1) {
        const product = getProductInfo(products[i].product_ID)
        lst.push({
          id: products[i].product_ID,
          image: product.image_link,
          name: product.name,
          quantity: parseInt(products[i].quantity, 10),
          cost: parseInt(product.cost, 10),
          total: parseInt(products[i].quantity, 10) * parseInt(product.cost, 10)
        })
      }
    }
    setItemList(lst)
  }

  useEffect(() => {
    getItems()
  }, [products])

  const DetailList = () => {
    if (itemList) return itemList.map((item) => <OrderDetail prop={item} />)
    return null
  }

  const close = () => {
    setProducts(false)
    setPop(false)
  }

  return (
    <div className="container">
      <div id="order-page-title">Danh sách đơn hàng</div>
      <div id="order-page-nav">
        <Nav setFilter={setFilter} />
      </div>
      <div id="order-page-order-list">
        <Order
          orderList={filterOrder()}
          setPop={setPop}
          setOrderID={setOrderID}
          setStatus={setStatus}
          setAddress={setAddress}
          setPhoneNumber={setPhoneNumber}
        />
      </div>
      <Popup
        orderID={orderID}
        address={address}
        phoneNumber={phoneNumber}
        close={close}
        status={status}
        setStatus={setStatus}
        DetailList={DetailList}
      />
    </div>
  )
}
