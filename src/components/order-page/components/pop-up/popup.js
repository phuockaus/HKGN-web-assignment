/* eslint-disable react/prop-types */
import Cookies from 'js-cookie'
import { decode } from 'string-encode-decode'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../../../utils/contextControl'
import './popup.css'
import OrderDetail from '../detail/detail'
import getListProductOrder from '../../../../utils/getOrderProduct'

export default function Popup({ orderID, status }) {
  const { productList } = useContext(AppContext)
  const [itemList, setItemList] = useState([])
  const [products, setProducts] = useState(false)
  const Id = decode(Cookies.get('accountID'))
  const address = decode(Cookies.get('address'))

  useEffect(() => {
    getListProductOrder(orderID, Id)
      .then((data) => {
        setProducts(data)
      })
  }, [orderID])
  console.log(products)
  const getProductInfo = (id) => {
    if (productList) return productList.find((product) => product.product_ID === id)
    return null
  }
  const getItems = () => {
    const lst = []
    if (productList) {
      for (let i = 0; i < products.length; i += 1) {
        const product = getProductInfo(products[i].product_ID)
        lst.push({
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
  }, [productList])

  const DetailList = () => {
    if (itemList) return itemList.map((item) => <OrderDetail props={item} />)
    return null
  }
  return (
    <div id="order-pop-up-container">
      <div id="order-pop-up-content">
        <div id="address-bar-order">
          <div id="address-bar-order-title">
            Địa chỉ giao hàng:
            {' '}
            <span id="address-bar-order-address">{address}</span>
          </div>
          <div id="order-status">
            Trạng thái đơn hàng:
            {' '}
            <span id="address-bar-order-status">{status}</span>
          </div>
        </div>
        <div>
          {DetailList()}
        </div>
        <div>
          <button type="button" onClick={() => { document.getElementById('order-pop-up-container').style.display = 'none' }}>Close</button>
        </div>
      </div>
    </div>
  )
}
