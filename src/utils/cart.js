/* eslint-disable no-console */
import Cookies from 'js-cookie'

export const increaseAmount = (id, num) => {
  const cart = JSON.parse(Cookies.get('cart'))
  for (let i = 0; i < cart.length; i += 1) {
    if (cart[i].productID === id) {
      cart[i].quantity += num
      break
    }
  }
  Cookies.set('cart', JSON.stringify(cart), { expires: 3 })
}

export const decreaseAmount = (id, num) => {
  const cart = JSON.parse(Cookies.get('cart'))

  for (let i = 0; i < cart.length; i += 1) {
    if (cart[i].productID === id) {
      cart[i].quantity -= num
      break
    }
  }
  Cookies.set('cart', JSON.stringify(cart), { expires: 3 })
}

export const addItemToCart = (item) => {
  const cart = JSON.parse(Cookies.get('cart'))
  let duplicate = false
  for (let i = 0; i < cart.length; i += 1) {
    if (cart[i].productID === item.productID) {
      duplicate = true
      break
    }
  }
  if (duplicate) return true
  cart.push(item)
  Cookies.set('cart', JSON.stringify(cart), { expires: 3 })
  return false
}

export const removeItemFromCart = (id) => {
  const cart = JSON.parse(Cookies.get('cart'))

  for (let i = 0; i < cart.length; i += 1) {
    if (cart[i].productID === id) {
      cart.splice(i, 1)
      break
    }
  }
  Cookies.set('cart', JSON.stringify(cart), { expires: 3 })
}
