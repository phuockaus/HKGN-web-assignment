import React from 'react'
import './controls.css'
import QuantityControl from './quantity-control/quantity-control'

export default function controlButtons() {
  return (
    <div id="controls-container">
      <form id="buy-form">
        <div id="amount-control">
          <div>Số lượng</div>
          <QuantityControl />
          <div>(10 sản phẩm còn lại)</div>
        </div>
        <div id="buttons-container">
          <div className="button_t">Thêm vào giỏ hàng</div>
          <div className="button_t">Xem giỏ hàng</div>
        </div>
      </form>
    </div>
  )
}
