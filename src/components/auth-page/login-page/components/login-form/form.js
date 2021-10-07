import React from 'react'
import './form.css'

// export default function LoginForm() {
//   <div className="LoginForm">
//     <div className="LoginForm">
//       <form>
//         <h3 className="HeaderLoginForm">Đăng nhập</h3>
//         <div className="textContainer">
//           <input
//             size="35"
//             type="text"
//             required
//             placeholder="Số điện thoại"
//           />
//         </div>
//         <div className="textContainer">
//           <input
//             size="35"
//             type="password"
//             required
//             placeholder="Mật khẩu"
//             fontSize="40px"
//           />
//         </div>
//         <div className="LoginButton">
//           <input type="submit" value="Đăng nhập" id="LoginButton" />
//         </div>
//         <div className="SignUpField">
//           <div className="Question">Chưa có tài khoản? </div>
//           <div className="SignUpButton">
//             <input type="submit" value="Đăng ký" id="SignUpButton" />
//           </div>
//         </div>
//       </form>
//     </div>
//   </div>
// }
export default function Form() {
  return (
    <div id="Form">
      <form>
        <div id="FormHeader">Đăng nhập</div>
        <div id="textContainer">
          <input
            type="text"
            required
            placeholder="Số điện thoại"
          />
        </div>
        <div id="textContainer">
          <input
            type="password"
            required
            placeholder="Mật khẩu"
          />
        </div>
        <div id="LoginButton">
          <input type="submit" value="Đăng nhập" />
        </div>
        <div id="SignUp">
          <div>Chưa có tài khoản? </div>
          <div><a href="www.google.com">Đăng ký </a></div>
        </div>
      </form>
    </div>
  )
}
