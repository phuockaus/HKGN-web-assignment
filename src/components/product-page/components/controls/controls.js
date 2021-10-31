import React from 'react'
import './controls.css'
import QuantityControl from '../quantity-control/quantity-control'

export default function controlButtons({ props }) {
  const stock = Number(props.stock)
  return (
    <div id="controls-container">
      <form id="buy-form">
        <div id="amount-control">
          <span>Số lượng </span>
          <QuantityControl props={props.stock} />
          <span>
            {`(${stock} sản phẩm còn lại)`}
          </span>
        </div>
        <div id="buttons-container">
          <div className="button_t">Thêm vào giỏ hàng</div>
          <div className="button_t">Xem giỏ hàng</div>
        </div>
      </form>
    </div>
  )
}
