import React from 'react'
import './controls.css'
import QuantityControl from '../quantity-control/quantity-control'

export default function controlButtons({ props }) {
  const stock = Number(props.stock)
  return (
    <div>
      <form>
        <div id="amount-control">
          <span>Số lượng </span>
          <QuantityControl props={props.stock} />
          <span>
            {`(${stock} sản phẩm còn lại)`}
          </span>
        </div>
        <div id="buttons-container">
          <div className="btn" id="btn_add_cart">Thêm vào giỏ hàng</div>
          <div className="btn" id="btn_view_cart">Xem giỏ hàng</div>
        </div>
      </form>
    </div>
  )
}
