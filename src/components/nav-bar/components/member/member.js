import React from 'react'
import './member.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import Cookies from 'js-cookie'
import { decode } from 'string-encode-decode'
import { Link } from 'react-router-dom'
import logout from '../../../../utils/logout'

export default function MemberButtons() {
  const name = `${decode(Cookies.get('firstName'))} ${decode(Cookies.get('lastName'))}`
  const role = String(decode(Cookies.get('role')))
  return (
    <div id="member-buttons">
      <div id="cart-member-button">
        <Link to="/cart">
          <FontAwesomeIcon icon={faCartPlus} id="cart-member-icon" />
        </Link>
      </div>
      <div id="user-button">
        <FontAwesomeIcon icon={faUser} id="user-icon" />
        <div id="drop-down-info">
          <div id="member-name">{name}</div>
          <div id="drop-down-member">
            <a href="/account-info">Thông tin tài khoản</a>
            {role === 'admin' ? <a href="/admin-page">Trang quản lý</a> : <></>}
            <a href="/order">Đơn hàng của tôi</a>
            <a href="/" onClick={logout}>
              Đăng xuất
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
