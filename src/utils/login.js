import getAccount from './getAccount'

// const fs = require('fs')

export default function login(details) {
  let userpassword = ''
  getAccount(details.phone_number)
    .then((data) => {
      if (data.length !== 0) {
        userpassword = data[0].password
        if (userpassword === details.password) {
          console.log('True pass')
        } else {
          console.log('Wrong')
          window.alert('Wrong password')
        }
      } else {
        console.log('No number found')
      }
    })
    .catch((err) => { console.log(err) })
}
