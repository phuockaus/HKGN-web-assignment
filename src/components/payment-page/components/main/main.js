import React, { useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { AppContext } from '../../../../utils/contextControl'
import AddressBar from '../address-bar/address_bar'
import SubmitPayment from '../order-submit/submit'
import ProductInCartList from '../product-list/product_list'
import './main.css'
import Popup from '../pop-up/popup'

export default function Main() {
  const { productList } = useContext(AppContext)
  const cart = JSON.parse(Cookies.get('cart'))
  const [totalPrice, setTotalPrice] = useState(0)
  const [itemList, setItemList] = useState([])

  const getProductInfo = (id) => {
    if (productList) return productList.find((product) => product.product_ID === id)
    return null
  }
  const getTotalPrice = () => {
    let total = 0
    for (let i = 0; i < itemList.length; i += 1) {
      total += itemList[i].total
    }
    setTotalPrice(total)
  }

  useEffect(() => {
    getTotalPrice()
  }, [itemList])

  const getItems = () => {
    const lst = []
    if (productList) {
      for (let i = 0; i < cart.length; i += 1) {
        const product = getProductInfo(cart[i].productID)
        lst.push({
          id: cart[i].productID,
          name: product.name,
          total: parseInt(cart[i].quantity, 10) * parseInt(product.cost, 10)
        })
      }
    }
    setItemList(lst)
  }

  useEffect(() => {
    getItems()
  }, [productList])

  const [discount, setDiscount] = useState(false)
  const [note, setNote] = useState('')
  const [amount, setAmount] = useState(0)
  const [message, setMessage] = useState('')
  const checkDiscount = () => {
    if (!discount) {
      setDiscount(true)
      document.getElementById('discount-input').disabled = false
    } else {
      setDiscount(false)
      document.getElementById('discount-input').disabled = true
    }
  }

  const pay = () => {
    const finalDiscount = 200 * amount * Number(discount)
    if (finalDiscount > totalPrice) {
      setMessage('Số tiền giảm giá của bạn đang lớn hơn tổng giá trị đơn hàng. Số lượng xu sẽ được tự động điều chỉnh sao cho phù hợp. Bạn có đồng ý không?')
      document.getElementById('payment-pop-up-container').style.display = 'block'
    }
  }

  return (
    <div id="payment-page-container">
      <Popup message={message} />
      <div id="payment-page-title">Thanh toán</div>
      <div id="payment-page-addressbar">
        <AddressBar />
      </div>
      <div id="payment-page-productlist">
        <ProductInCartList
          products={itemList}
          totalPrice={totalPrice}
          amount={amount}
          discount={discount}
        />
      </div>
      <div id="payment-page-submit">
        <SubmitPayment
          totalPrice={totalPrice}
          discount={discount}
          checkDiscount={checkDiscount}
          amount={amount}
          setAmount={setAmount}
          note={note}
          setNote={setNote}
          pay={pay}
        />
      </div>
    </div>
  )
}
