const axios = require('axios')

export default async function getListProductOrder(accountID, orderID) {
  const promise = axios.get(`http://localhost:3000/order/${accountID}/${orderID}`)
  const dataPromise = promise
    .then((response) => response.data)
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error.data))
  return dataPromise
}

export async function getAllOrder() {
  const promise = axios.get('http://localhost:3000/order')
  const dataPromise = promise
    .then((response) => response.data)
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error.data))
  return dataPromise
}
