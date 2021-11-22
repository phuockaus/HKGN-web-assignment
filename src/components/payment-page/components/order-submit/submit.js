/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import './submit.css'

export default function SubmitPayment() {
  return (
    <div id="submit-payment-container">
      <form id="submit-payment-form">
        <input
          type="checkbox"
          className="apply-sale"
          // value={details.cate_3}
          // onChange={() => {
          //  if (!details.cate_3) setDetails({ ...details, cate_3: true })
          //       else setDetails({ ...details, cate_3: false })
          //     }}
        />
        <label htmlFor="apply-sale">Sử dụng xu giảm giá</label>
        <span id="discount-amount"> (Giảm được xxxx)</span>
        <br />
        <label htmlFor="note">Lời nhắn</label>
        <br />
        <textarea
          id="note"
          rows="3"
          cols="100"
          placeholder="Lưu ý cho shop"
        />
      </form>
      <div id="payment-submit-area">
        <div id="total-payment-title">
          Tổng cộng:
          <div id="total-payment">
            100000$
          </div>
        </div>
        <div id="submit-payment-button">
          <button type="button" id="submit-payment-btn" className="btn">Đặt hàng</button>
        </div>
      </div>
    </div>
  )
}
