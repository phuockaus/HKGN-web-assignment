/* eslint-disable arrow-body-style */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import './index.css'

const InfoFrame = () => {
  // const [editing, setEditing] = useState(false)
  return (
    <div id="info-frame">
      <span id="account-info-title"> Thông tin khách hàng</span>
      <br />
      <div id="account-info-container">
        <span className="title">Thông tin tài khoản</span>
        <br />
        <table className="info-table">
          <tr className="info-row">
            <td className="prop">
              <span>Họ và Tên</span>
            </td>
            <td>
              <span>Ngô Thấp Trinh</span>
            </td>
            <td>
              <div className="edit-btn">
                <FontAwesomeIcon icon={faEdit} />
                Chỉnh Sửa
              </div>
            </td>
          </tr>
          <tr className="info-row">
            <td className="prop">
              <span>Số điện thoại</span>
            </td>
            <td>
              <span>08865652</span>
            </td>
          </tr>
          <tr className="info-row">
            <td className="prop">
              <span>Email</span>
            </td>
            <td>
              <span>test@gmail.com</span>
            </td>
            <td>
              <div className="edit-btn">
                <FontAwesomeIcon icon={faEdit} />
                Chỉnh sửa
              </div>
            </td>
          </tr>
          <tr className="info-row">
            <td className="prop">
              <span>Điểm thưởng</span>
            </td>
            <td>
              <span>100</span>
            </td>
          </tr>
          <tr>
            <td>
              <div className="change-pass-btn" type="button">
                Đổi mật khẩu
              </div>
            </td>
          </tr>
        </table>
        <br />
        <span className="title">Địa chỉ nhận hàng</span>
        <br />
        <table className="info-table">
          <tr>
            <td className="prop">
              <span>Ngô Thấp Trinh</span>
              <br />
              <span>08865652</span>
            </td>
            <td>
              <span>đường Y, phường Y, ABC</span>
            </td>
            <td>
              <div className="edit-btn">
                <FontAwesomeIcon icon={faEdit} />
                Chỉnh Sửa
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default InfoFrame
