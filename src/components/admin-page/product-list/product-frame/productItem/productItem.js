/* eslint-disable react/prop-types */
import React from 'react'
import './productItem.css'

export default function ProductItem({ data, setShowPop, setDataInPop }) {
  const handleOnClick = () => {
    setDataInPop(data)
    setShowPop(true)
  }

  return (
    <button
      type="button"
      className="product-card"
      key={data.product_ID}
      onClick={() => handleOnClick()}
    >
      <div className="product-code content">{data.product_ID}</div>
      <div className="product-name content">{data.name}</div>
      <div className="product-image content">
        <img src={data.image_link} alt={data.product_ID} className="mini-img" />
      </div>
      <div className="product-cost content">{parseInt(data.cost, 10)}</div>
      <div className="product-category content">{data.category}</div>
      <div className="product-stock content">{parseInt(data.stock, 10)}</div>
    </button>
  )
}
