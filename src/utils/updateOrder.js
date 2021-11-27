const axios = require('axios')

export default async function updateStatusOfOrder(orderID, status) {
  const promise = axios.put('http://localhost:3000/order', {
    order_id: parseInt(orderID, 10),
    status
  })
  const dataPromise = promise
    .then((response) => console.log(response))
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error.data))
  return dataPromise
}
