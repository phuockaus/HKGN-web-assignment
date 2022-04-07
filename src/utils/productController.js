const axios = require('axios')

export default async function updateProduct(orderID, input) {
  const promise = axios.put(`http://localhost:3000/product/${orderID}`, {
    name: input.name,
    cost: input.newCost,
    category: input.newCategory,
    description: input.newDescription,
    image_link: input.imageLink,
    stock: parseInt(input.newStock, 10)
  })
  const dataPromise = promise
    .then((response) => console.log(response))
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error.data))
  return dataPromise
}

export async function addProduct(input) {
  const promise = axios.post('http://localhost:3000/product/', {
    name: input.name,
    cost: input.newCost,
    category: input.newCategory,
    description: input.newDescription,
    image_link: input.imageLink,
    stock: parseInt(input.newStock, 10)
  })
  const dataPromise = promise
    .then((response) => console.log(response))
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error.data))
  return dataPromise
}

export async function deleteProduct(productID) {
  const promise = axios.delete(`http://localhost:3000/product/${productID}`)
  const dataPromise = promise
    .then((response) => console.log(response))
    .catch((error) => console.log(error.data))
  return dataPromise
}
