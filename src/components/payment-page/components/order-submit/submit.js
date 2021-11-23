/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import Cookies from 'js-cookie'
import React from 'react'
import { decode } from 'string-encode-decode'
import './submit.css'

export default function SubmitPayment({
  totalPrice, discount, checkDiscount, amount, setAmount, note, setNote, pay
}) {
  const coupon = parseInt(decode(Cookies.get('coupon')), 10)
  const getMaxDiscount = () => {
    if (200 * coupon > totalPrice) return totalPrice
    return 200 * coupon
  }
  const checkAmount = (d) => {
    if (d > coupon) setAmount(100)
    else setAmount(d)
  }
  return (
    <div id="submit-payment-container">
      <form id="submit-payment-form">
        <div id="coupon-amount">
          Số lương xu trong tài khoản:
          {' '}
          {coupon}
        </div>
        <input
          type="checkbox"
          className="cat"
          value={discount}
          onChange={checkDiscount}
        />
        <label htmlFor="cat">Sử dụng xu giảm giá</label>
        <div id="discount-amount-area">
          <input
            type="number"
            id="discount-input"
            placeholder="Nhập số lượng xu"
            value={amount}
            onChange={(e) => checkAmount(e.target.value)}
            disabled
          />
          <span id="discount-amount">
            {'  '}
            (Giảm tối đa
            {' '}
            {getMaxDiscount()}
            {' '}
            đồng)
          </span>
        </div>
        <br />
        <label htmlFor="note">Lời nhắn</label>
        <br />
        <textarea
          id="note"
          rows="3"
          cols="100"
          placeholder="Lưu ý cho shop"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </form>
      <div id="submit-payment-button">
        <button type="button" id="submit-payment-btn" className="btn" onClick={pay}>Đặt hàng</button>
      </div>
    </div>
  )
}
