import React from 'react'
import './member.css'
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'
import {
  faCartPlus, faUser
} from '@fortawesome/free-solid-svg-icons'
import Cookies from 'js-cookie'
import { decode } from 'string-encode-decode'
import logout from '../../../../utils/logout'

export default function MemberButtons() {
  const name = `${decode(Cookies.get('firstName'))} ${decode(Cookies.get('lastName'))}`
  return (
    <div id="member-buttons">
      <div id="cart-member-button">
        <FontAwesomeIcon icon={faCartPlus} id="cart-member-icon" />
      </div>
      <div id="user-button">
        <FontAwesomeIcon icon={faUser} id="user-icon" />
        <div id="drop-down-info">
          <div id="member-name">{name}</div>
          <div id="drop-down-member">
            <a href="/">Thông tin tài khoản</a>
            <a href="/">Đơn hàng của tôi</a>
            <a href="/" onClick={logout}>Đăng xuất</a>
          </div>
        </div>
      </div>
    </div>
  )
}
