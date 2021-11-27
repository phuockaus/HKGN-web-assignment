const axios = require('axios').default

export default function addOrder(cusID, address, cou, finalcost, lst) {
  axios.post('http://localhost:3000/order',
    {
      customer_ID: cusID,
      sent_address: address,
      coupon: cou,
      final_cost: finalcost,
      list: lst
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
