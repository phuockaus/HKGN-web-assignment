import React from 'react'
import './form.css'

export default function LoginForm() {
  return (
    <div className="LoginForm">
      <form>
        <h3 className="HeaderLoginForm">Đăng nhập</h3>
        <div className="textContainer">
          <input
            size="35"
            type="text"
            required
            placeholder="Số điện thoại"
            // value={this.state.username}
            // onChange={this.onChangeUsername}
          />
        </div>
        <div className="textContainer">
          <input
            size="35"
            type="password"
            required
            placeholder="Mật khẩu"
            fontSize="40px"
            // value={this.state.password}
            // onChange={this.onChangePassword}
          />
        </div>
        <div className="LoginButton">
          <input type="submit" value="Đăng nhập" id="LoginButton" />
        </div>
        <div className="SignUpField">
          <div className="Question">Chưa có tài khoản? </div>
          <div className="SignUpButton">
            <input type="submit" value="Đăng ký" id="SignUpButton" />
          </div>
        </div>
      </form>
    </div>
  )
}
