import React, { useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { decode } from 'string-encode-decode'
import { AppContext } from '../../../../utils/contextControl'
import AddressBar from '../address-bar/address_bar'
import SubmitPayment from '../order-submit/submit'
import ProductInCartList from '../product-list/product_list'
import './main.css'
import Popup from '../pop-up/popup'
// import addOrder from '../../../../utils/addOrder'

export default function Main() {
  const cart = JSON.parse(Cookies.get('cart'))
  const { productList } = useContext(AppContext)
  const [totalPrice, setTotalPrice] = useState(0)
  const [itemList, setItemList] = useState([])
  const [discount, setDiscount] = useState(false)
  const [note, setNote] = useState('')
  const [amount, setAmount] = useState(0)
  const [message, setMessage] = useState('')

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

  const checkDiscount = () => {
    if (!discount) {
      setDiscount(true)
      document.getElementById('discount-input').disabled = false
    } else {
      setDiscount(false)
      document.getElementById('discount-input').disabled = true
    }
  }
  const getFinalDiscount = () => amount * 200 * Number(discount)
  // eslint-disable-next-line max-len
  const getFinalPrice = () => ((getFinalDiscount() > totalPrice) ? 0 : (totalPrice - getFinalDiscount()))

  const submit = () => {
    const cusID = parseInt(decode(Cookies.get('accountID')), 10)
    const address = decode(Cookies.get('address'))
    const cou = parseInt(decode(Cookies.get('coupon')), 10) - amount
    const finalCost = getFinalPrice()
    const lst = []
    for (let i = 0; i < cart.length; i += 1) {
      lst.push({
        product_ID: parseInt(cart[i].productID, 10),
        quantity: parseInt(cart[i].quantity, 10)
      })
    }
    window.alert(`${cusID} ${address} ${cou} ${finalCost}`)
    window.alert(lst)
  }

  const pay = () => {
    const finalDiscount = 200 * amount * Number(discount)
    if (finalDiscount > totalPrice) {
      setMessage('Số tiền giảm giá của bạn đang lớn hơn tổng giá trị đơn hàng. Số lượng xu sẽ được tự động điều chỉnh sao cho phù hợp. Bạn có đồng ý không?')
      document.getElementById('payment-pop-up-container').style.display = 'block'
    } else submit()
  }

  return (
    <div id="payment-page-container">
      <Popup message={message} submit={submit} />
      <div id="payment-page-title">Thanh toán</div>
      <div id="payment-page-addressbar">
        <AddressBar />
      </div>
      <div id="payment-page-productlist">
        <ProductInCartList
          products={itemList}
          totalPrice={totalPrice}
          getFinalDiscount={getFinalDiscount}
          getFinalPrice={getFinalPrice}
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
