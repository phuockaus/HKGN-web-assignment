/* eslint-disable no-console */
import Cookies from 'js-cookie'

export default function logout() {
  Cookies.remove('accountID')
  Cookies.remove('firstName')
  Cookies.remove('lastName')
  Cookies.remove('phoneNumber')
  Cookies.remove('email')
  Cookies.remove('address')
  Cookies.remove('coupon')
  Cookies.remove('role')
}
