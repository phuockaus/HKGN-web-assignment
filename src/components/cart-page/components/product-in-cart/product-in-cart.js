/* eslint-disable react/prop-types */
import React, { useContext, useEffect } from 'react'
import './product-in-cart.css'
import { AppContext } from '../../../../utils/contextControl'

export default function ProductInCart({ props }) {
  const {
    cart, productList, addItemToCart, removeItemFromCart
  } = useContext(AppContext)

  // const [tempCart, setTempCart] = useState(cart)

  const updatePage = () => {
    // window.location.reload()
    window.alert(`cart change to ${cart}`)
  }

  useEffect(() => {
    updatePage()
  }, [cart])

  const Item = (item) => {
    if (productList) {
      for (let i = 0; i < productList.length; i += 1) {
        if (productList[i].product_ID === item.productID) {
          const info = {
            product_ID: productList[i].product_ID,
            name: productList[i].name,
            cost: productList[i].cost,
            image_link: productList[i].image_link,
            stock: productList[i].stock,
            quantity: item.quantity
          }
          return info
        }
      }
    }
    return 0
  }

  const itemInfo = Item(props)
  const price = Number(itemInfo.cost)
  const totalPrice = Number(itemInfo.cost) * Number(itemInfo.quantity)
  // eslint-disable-next-line no-unused-vars

  const removeItem = (itemID) => {
    removeItemFromCart(itemID)
  }
  const increase = (itemID) => {
    const itemToAdd = {
      productID: itemID,
      quantity: 1
    }
    addItemToCart(itemToAdd)
    console.log(cart)
  }
  const decrease = (itemID) => {
    const itemToAdd = {
      productID: itemID,
      quantity: -1
    }
    addItemToCart(itemToAdd)
    console.log(cart)
  }
  return (
    <div id="product-in-cart-container">
      <div id="product-img-in-cart-container">
        <img src={itemInfo.image_link} alt="product" id="product-in-cart-img" />
      </div>
      <div id="product-in-cart-name">{itemInfo.name}</div>
      <div id="in-cart-price">
        <div>
          {price}
          <span> đồng</span>
        </div>
      </div>
      <div id="in-cart-quantity">
        <input
          id="decrease-btn"
          className="quantity-btn"
          type="button"
          value="-"
          onClick={() => decrease(itemInfo.product_ID)}
        />
        {itemInfo.quantity}
        <input
          id="increase-btn"
          className="quantity-btn"
          type="button"
          value="+"
          onClick={() => increase(itemInfo.product_ID)}
        />
      </div>
      <div id="in-cart-total">
        <div>
          {totalPrice}
          <span> đồng</span>
        </div>
      </div>
      <div id="in-cart-removeItem">
        <input
          id="removeButton"
          className="remove-button"
          type="button"
          value="Xóa"
          onClick={() => removeItem(itemInfo.product_ID)}
        />
      </div>
    </div>
  )
}
