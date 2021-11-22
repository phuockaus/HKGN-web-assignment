import { encode } from 'string-encode-decode'
import Cookies from 'js-cookie'
import getAccount from './getAccount'

export default function login(details) {
  let userpassword = ''
  getAccount(details.phone_number)
    .then((data) => {
      if (data.length !== 0) {
        userpassword = data[0].password
        if (userpassword === details.password) {
          // eslint-disable-next-line no-console
          console.log('True pass')
          Cookies.set('accountID', encode(String(data[0].account_ID)), { expires: 3 })
          Cookies.set('firstName', encode(String(data[0].first_name)), { expires: 3 })
          Cookies.set('lastName', encode(String(data[0].last_name)), { expires: 3 })
          Cookies.set('phoneNumber', encode(String(data[0].phone_number)), { expires: 3 })
          Cookies.set('email', encode(String(data[0].email)), { expires: 3 })
          Cookies.set('address', encode(String(data[0].address)), { expires: 3 })
          Cookies.set('coupon', encode(String(data[0].coupon)), { expires: 3 })
          Cookies.set('role', encode(String(data[0].role)), { expires: 3 })
          Cookies.set('password', encode(String(data[0].password)), { expires: 3 })
        } else {
          // eslint-disable-next-line no-alert
          window.alert('Wrong password')
        }
      } else {
        // eslint-disable-next-line no-alert
        window.alert('Cannot find your account')
      }
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err)
    })
}
