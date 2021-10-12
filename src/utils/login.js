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
    .catch((err) => { console.log(err) })
}
