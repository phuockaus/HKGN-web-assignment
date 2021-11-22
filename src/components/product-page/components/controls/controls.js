import Cookies from 'js-cookie'
import React, { useState } from 'react'
import { addItemToCart } from '../../../../utils/cart'
import './controls.css'

export default function controlButtons({ props, notify }) {
  const stock = parseInt(props.stock, 10)
  const [amount, setAmount] = useState(0)

  const add = () => {
    const q = parseInt(amount, 10)
    if (!Cookies.get('accountID')) {
      notify('Vui lòng đăng nhập để thêm vào giỏ hàng!')
      return
    }
    if (q === 0) {
      notify('Vui lòng chọn số lượng cần mua!')
      return
    }
    if (q > stock) {
      notify('Số lượng còn lại không đủ!')
      return
    }
    const duplicate = addItemToCart({
      productID: props.product_ID,
      quantity: q
    })
    if (duplicate) notify('Sản phẩm đã tồn tại trong giỏ hàng!')
    else notify('Sản phẩm đã được thêm vào giỏ hàng!')
  }

  return (
    <div>
      <form>
        <div id="amount-control">
          <span>Số lượng </span>
          <form id="quantity-control">
            <input
              id="quantity"
              type="number"
              min="1"
              max={stock}
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value)
              }}
            />
          </form>
          <span>
            {`(${stock} sản phẩm còn lại)`}
          </span>
        </div>
        <div id="buttons-container">
          <input
            type="button"
            className="btn"
            id="btn_add_cart"
            value="Thêm vào giỏ hàng"
            onClick={add}
          />
          <a href="/cart" className="btn" id="btn_view_cart">Xem giỏ hàng</a>
        </div>
      </form>
    </div>
  )
}
