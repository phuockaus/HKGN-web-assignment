const axios = require('axios')

export default function getAccount(phoneNumber) {
  axios.get(`http://localhost:3000/account/${phoneNumber}`)
    .then((response) => {
      // eslint-disable-next-line no-console
      console.log(response.data)
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error)
    })
}
