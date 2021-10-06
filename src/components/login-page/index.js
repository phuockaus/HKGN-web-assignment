import React from 'react'
import Header from './components/header/header'
import LoginForm from './components/login_form/form'
import Logo from './assets/logo.jpg'
import './login-page.css'

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
      <Header />
      <div className="MiddlePage">
        <div className="NameLabel">
          <h3 className="Name">CAFE HKGN </h3>
          <h4 className="Slogan">UỐNG CAFE ĐỂ KHÔNG MẤT GỐC </h4>
          <img src={Logo} alt="Logo" id="BigLogo" />
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
