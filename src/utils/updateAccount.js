/* eslint-disable no-console */
import axios from 'axios'
import { encode } from 'string-encode-decode'
import Cookies from 'js-cookie'

export default async function updateAccount(infoBundle, successCallBack, errorCallBack) {
  try {
    await axios.put(`http://localhost:3000/account/${infoBundle.phoneNumber}`, {
      first_name: infoBundle.firstName,
      last_name: infoBundle.lastName,
      address: infoBundle.address,
      email: infoBundle.email,
      password: infoBundle.password,
      coupon: infoBundle.coupon
    })
    Cookies.set('firstName', encode(infoBundle.firstName), { expires: 3 })
    Cookies.set('lastName', encode(infoBundle.lastName), { expires: 3 })
    Cookies.set('email', encode(infoBundle.email), { expires: 3 })
    Cookies.set('address', encode(infoBundle.address), { expires: 3 })
    Cookies.set('coupon', encode(String(infoBundle.coupon)), { expires: 3 })
    Cookies.set('password', encode(String(infoBundle.password)), { expires: 3 })
    successCallBack()
  } catch (err) {
    console.log(err)
    errorCallBack()
  }
}
