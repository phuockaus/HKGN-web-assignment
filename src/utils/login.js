import { encode } from 'string-encode-decode'
import { useCookies } from 'react-cookie'
import getAccount from './getAccount'

export default function login(details) {
  const [cookies, setCookie] = useCookies([
    'accountID, firstName, lastName, phoneNumber, email, address, coupon, role'
  ])
  let userpassword = ''
  getAccount(details.phone_number)
    .then((data) => {
      if (data.length !== 0) {
        userpassword = data[0].password
        if (userpassword === details.password) {
          // eslint-disable-next-line no-console
          console.log('True pass')
          console.log(cookies.phoneNumber)
          const expireDay = new Date()
          expireDay.setDate(expireDay.getDate() + 3)
          setCookie('accountID', encode(String(details.account_ID)), { expires: expireDay })
          setCookie('firstName', encode(String(details.first_name)), { expires: expireDay })
          setCookie('lastName', encode(String(details.last_name)), { expires: expireDay })
          setCookie('phoneNumber', encode(String(details.phone_number)), { expires: expireDay })
          setCookie('email', encode(String(details.email)), { expires: expireDay })
          setCookie('address', encode(String(details.address)), { expires: expireDay })
          setCookie('coupon', encode(String(details.coupon)), { expires: expireDay })
          setCookie('role', encode(String(details.role)), { expires: expireDay })
        } else {
          // eslint-disable-next-line no-alert
          window.alert('Wrong password')
        }
      } else {
        // eslint-disable-next-line no-alert
        window.alert('Cannot find your account')
      }
    })
    // eslint-disable-next-line no-console
    .catch((err) => {
      console.log(err)
    })
}
