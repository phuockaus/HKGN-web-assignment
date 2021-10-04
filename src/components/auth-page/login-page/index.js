import React from 'react'
import './login-page.css'
import Logo from './assets/logo.jpg'

// class CreateUser extends Component {
//   // constructor(props) {
//   //   super(props)
//   //   this.onChangeUserName = this.onChangeUserName.bind(this)
//   //   this.onSubmit = this.onSubmit.bind(this)
//   //   this.state = {
//   //     username: '',
//   //     password: ''
//   //   }
//   // }

//   // onChangeUserName(e) {
//   //   this.setState({ username: e.target.value })
//   // }

//   // onSubmit(e) {
//   //   e.preventDefault()
//   //   const user = {
//   //     Name: this.state.username,
//   //     password: this.state.password
//   //   }
//   //   console.log(user)
//   //   axios.post(url+'/users/add', user)
//   //     .then(res => console.log(res.data))
//   //   this.setState({ username: '' })
//   // }
//   render() {
//     return (
//       <div>
//         <h3>Đăng ký</h3>
//         <form onSubmit={this.onSubmit}>
//           <div className="form-group">
//             {/* <label>Số điện thoại</label> */}
//             <input
//               id="username"
//               type="text"
//               required
//               className="form-control"
//               // value={this.state.username}
//               // onChange={this.onChangeUsername}
//             />
//           </div>
//           <div className="form-group">
//             {/* <label>Mật khẩu</label> */}
//             <input
//               type="text"
//               required
//               className="form-control"
//               // value={this.state.password}
//               // onChange={this.onChangePassword}
//             />
//           </div>
//           <div className="form-group">
//             <input type="submit" value="Đăng nhập" className="btn btn-primary" />
//           </div>
//         </form>
//       </div>
//     )
//   }
// }
export default function Login() {
  return (
    <div className="LoginPage">
      <div className="HeaderPage">
        <div>
          <img src={Logo} alt="Logo" id="Logo" />
        </div>
      </div>
      <div className="MiddlePage">
        <div className="NameLabel">
          <h3 className="Name">CAFE HKGN </h3>
          <h4 className="Slogan">UỐNG CAFE ĐỂ KHÔNG MẤT GỐC </h4>
          <img src={Logo} alt="Logo" id="BigLogo" />
        </div>
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
      </div>
    </div>
  )
}
