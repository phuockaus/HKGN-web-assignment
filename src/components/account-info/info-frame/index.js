import React, { useState, useEffect } from 'react'
import { decode } from 'string-encode-decode'
import Cookies from 'js-cookie'
import './index.css'
import updateAccount from '../../../utils/updateAccount'

const InfoFrame = () => {
  const [infoBundle, setInfoBundle] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    coupon: 0,
    address: '',
    password: ''
  })
  const [changePassBundle, setChangePassBundle] = useState({
    oldPass: '',
    newPass: '',
    confirmPass: ''
  })
  const [notification, setNotification] = useState('')

  useEffect(() => {
    setInfoBundle({
      firstName: decode(Cookies.get('firstName')),
      lastName: decode(Cookies.get('lastName')),
      email: decode(Cookies.get('email')),
      phoneNumber: decode(Cookies.get('phoneNumber')),
      coupon: parseInt(decode(Cookies.get('coupon')), 10),
      address: decode(Cookies.get('address')),
      password: decode(Cookies.get('password'))
    })
  }, [])

  const showModal = () => {
    setNotification('')
    document.querySelector('.modal-container').style.display = 'flex'
    document.querySelector('#old-pass').value = ''
    document.querySelector('#new-pass').value = ''
    document.querySelector('#confirm-pass').value = ''
  }

  const hideModal = () => {
    document.querySelector('.modal-container').style.display = 'none'
  }

  const showNotifySuccess = () => {
    document.querySelector('#notify-success').style.display = 'flex'
  }

  const hideNotifySuccess = () => {
    document.querySelector('#notify-success').style.display = 'none'
  }

  const showNotifyError = () => {
    document.querySelector('#notify-error').style.display = 'flex'
  }

  const hideNotifyError = () => {
    document.querySelector('#notify-error').style.display = 'none'
  }

  const sendDataToUpdateInfo = () => {
    updateAccount(infoBundle, showNotifySuccess, showNotifyError)
  }

  const changePasswords = () => {
    if (changePassBundle.oldPass !== infoBundle.password) {
      setNotification('Password cũ không đúng, vui lòng thử lại')
    } else if (changePassBundle.newPass !== changePassBundle.confirmPass) {
      setNotification('Password mới không trùng khớp')
    } else {
      setInfoBundle({ ...infoBundle, password: changePassBundle.newPass })
      updateAccount(
        infoBundle,
        () => {
          setNotification('Đổi mật khẩu thành công')
        },
        () => {
          setNotification('Có lỗi xảy ra, thử lại sau')
        }
      )
    }
  }

  return (
    <div id="info-frame">
      <span id="account-info-title">Hồ sơ của tôi</span>
      <form className="account-info-form">
        <div className="form-label">
          <div className="info-label">Họ</div>
          <div className="info-label">Tên</div>
          <div className="info-label">Số điện thoại</div>
          <div className="info-label">Email</div>
          <div className="info-label">Điểm thưởng</div>
        </div>
        <div className="form-input">
          <input
            type="text"
            className="info-input"
            required
            value={infoBundle.lastName}
            onChange={(event) => {
              setInfoBundle({ ...infoBundle, lastName: event.target.value })
            }}
          />
          <input
            type="text"
            className="info-input"
            required
            value={infoBundle.firstName}
            onChange={(event) => {
              setInfoBundle({ ...infoBundle, firstName: event.target.value })
            }}
          />
          <div className="info-text">{infoBundle.phoneNumber}</div>
          <input
            type="text"
            className="info-input"
            value={infoBundle.email}
            required
            onChange={(event) => {
              setInfoBundle({ ...infoBundle, email: event.target.value })
            }}
          />
          <div className="info-text" id="coupon-info">
            {infoBundle.coupon}
          </div>
        </div>
      </form>
      <button type="button" className="btn" id="change-password" onClick={() => showModal()}>
        Đổi Mật Khẩu
      </button>
      <div id="address-form">Địa chỉ nhận hàng</div>
      <form className="account-info-form">
        <div className="form-label">
          <div className="info-label" id="address">
            {`${infoBundle.lastName} ${infoBundle.firstName}`}
            <br />
            {infoBundle.phoneNumber}
          </div>
        </div>
        <div className="form-input">
          <input
            type="text"
            className="info-input"
            required
            value={infoBundle.address}
            onChange={(event) => {
              setInfoBundle({ ...infoBundle, address: event.target.value })
            }}
          />
        </div>
      </form>
      <button type="submit" className="btn" id="save-btn" onClick={() => sendDataToUpdateInfo()}>
        Lưu
      </button>
      <div className="modal-container">
        <div className="modal-content">
          <form className="mini-form">
            <div className="form-row">
              <div className="label">Mật khẩu cũ</div>
              <input
                type="password"
                id="old-pass"
                className="pass-input"
                required
                onChange={(event) => {
                  setChangePassBundle({ ...changePassBundle, oldPass: event.target.value })
                }}
              />
            </div>
            <div className="form-row">
              <div className="label">Mật khẩu mới</div>
              <input
                type="password"
                className="pass-input"
                id="new-pass"
                required
                onChange={(event) => {
                  setChangePassBundle({ ...changePassBundle, newPass: event.target.value })
                }}
              />
            </div>
            <div className="form-row">
              <div className="label">Xác nhận mật khẩu mới</div>
              <input
                type="password"
                className="info-input"
                id="confirm-pass"
                required
                onChange={(event) => {
                  setChangePassBundle({ ...changePassBundle, confirmPass: event.target.value })
                }}
              />
            </div>
          </form>
          <div id="btn-container">
            <button
              type="button"
              className="btn"
              id="confirm-change"
              onClick={() => changePasswords()}
            >
              Đổi mật khẩu
            </button>
            <button type="button" className="btn-cancel" id="cancel" onClick={() => hideModal()}>
              Hủy bỏ
            </button>
          </div>
          <div id="notify-container">{notification}</div>
        </div>
      </div>

      <div id="notify-success">
        <div className="modal-content">
          <div className="modal-box">
            Đã lưu các thay đổi
            <button type="button" className="btn" id="confirm" onClick={() => hideNotifySuccess()}>
              Xác nhận
            </button>
          </div>
        </div>
      </div>

      <div className="modal-container" id="notify-error">
        <div className="modal-content">
          <div className="modal-box">
            Có lỗi xảy ra, vui lòng thử lại sau
            <button
              type="button"
              className="btn-cancel"
              id="confirm"
              onClick={() => hideNotifyError()}
            >
              Hủy bỏ
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoFrame
