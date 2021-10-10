const axios = require('axios').default

export default function addAccount(details) {
  // const bodyFormData = new FormData()
  // bodyFormData.append('first_name', details.fname)
  // bodyFormData.append('last_name', details.lname)
  // bodyFormData.append('address', details.address)
  // bodyFormData.append('phone_number', details.phone)
  // bodyFormData.append('email', details.email)
  // bodyFormData.append('password', details.pass)
  // bodyFormData.append('role', 'MEMBER')

  // axios({
  //   method: 'POST',
  //   url: 'http://localhost:3000/account',
  //   data: bodyFormData,
  //   headers: { 'Content-type': 'multipart/form-data' }
  // })
  //   .then((response) => {
  //     // eslint-disable-next-line no-console
  //     console.log(response)
  //   })
  //   .catch((error) => {
  //     // eslint-disable-next-line no-console
  //     console.log(error)
  //   })

  // axios({
  //   method: 'post',
  //   url: 'http://localhost:3000/account',
  //   data: JSON.stringify({
  //     first_name: String(details.fname),
  //     last_name: String(details.lname),
  //     address: String(details.address),
  //     phone_number: String(details.phone),
  //     email: String(details.email),
  //     password: String(details.pass),
  //     role: 'MEMBER'
  //   })
  // })
  //   .then((response) => {
  //     // eslint-disable-next-line no-console
  //     console.log(response)
  //   })
  //   .catch((error) => {
  //     // eslint-disable-next-line no-console
  //     console.log(error)
  //   })

  axios.post('http://localhost:3000/account', {
    first_name: String(details.fname),
    last_name: String(details.lname),
    address: String(details.address),
    phone_number: String(details.phone),
    email: String(details.email),
    password: String(details.pass),
    role: 'MEMBER'
  },
  {
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    }
  })
    .then((response) => {
      // eslint-disable-next-line no-console
      console.log(response)
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error)
    })
}
