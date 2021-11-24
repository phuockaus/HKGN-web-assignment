import Cookies from 'js-cookie'
import React, { useContext, useEffect, useState } from 'react'
import { decode } from 'string-encode-decode'
import getOrderList from '../../../../utils/getOrder'
import Nav from '../nav/nav'
import Popup from '../pop-up/popup'
import OrderList from '../order-list/order'

import './main.css'
import { AppContext } from '../../../../utils/contextControl'
import getListProductOrder from '../../../../utils/getOrderProduct'
import OrderDetail from '../detail/detail'

export default function Main() {
  const [orderList, setOrderList] = useState(false)
  const [filter, setFilter] = useState('all')
  const [status, setStatus] = useState(false)
  const [orderID, setOrderID] = useState(false)
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

  /*----------------------------------------------------------------------------------------------*/
  const { productList } = useContext(AppContext)
  const [itemList, setItemList] = useState([])
  const [products, setProducts] = useState(false)
  const Id = decode(Cookies.get('accountID'))
  const address = decode(Cookies.get('address'))

  useEffect(() => {
    getListProductOrder(Id, orderID)
      .then((data) => {
        setProducts(data)
      })
  }, [pop])

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

  const close = () => {
    setProducts(false)
    setPop(false)
  }
  const DetailList = () => {
    if (itemList) return itemList.map((item) => <OrderDetail prop={item} />)
    return null
  }
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
        address={address}
        close={close}
        status={status}
        DetailList={DetailList}
      />
    </div>
  )
}
