const axios = require('axios').default

export default function addAccount(details) {
  axios({
    method: 'post',
    url: 'http://localhost:3000/account',
    data: JSON.stringify({
      first_name: String(details.fname),
      last_name: String(details.lname),
      address: String(details.address),
      phone_number: String(details.phone),
      email: String(details.email),
      password: String(details.pass),
      role: 'MEMBER'
    })
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
