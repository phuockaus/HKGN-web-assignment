import React from 'react'
import './controls.css'
import QuantityControl from './quantity-control/quantity-control'

export default function controlButtons({ props }) {
  const stock = Number(props.stock)
  return (
    <div id="controls-container">
      <form id="buy-form">
        <div id="amount-control">
          <div>Số lượng</div>
          <QuantityControl props={props.stock} />
          <div>
            (
            {stock}
            &nbsp;
            sản phẩm còn lại)
          </div>
        </div>
        <div id="buttons-container">
          <div className="button_t">Thêm vào giỏ hàng</div>
          <div className="button_t">Xem giỏ hàng</div>
        </div>
      </form>
    </div>
  )
}
