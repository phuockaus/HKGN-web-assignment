/* eslint-disable react/prop-types */
import React from 'react'
import './productItem.css'

export default function ProductItem({
  data, setShowPop, setDataInPop, openDeletePopup
}) {
  const handleOnClick = () => {
    setDataInPop(data)
    setShowPop(true)
  }

  const handleOnDelete = () => {
    openDeletePopup(data.product_ID)
  }
  const shortName = data.name.length > 25 ? `${data.name.substring(0, 25)}...` : data.name
  return (
    <button
      type="button"
      className="product-card"
      key={data.product_ID}
      onClick={() => handleOnClick()}
    >
      <div className="product-code content">{data.product_ID}</div>
      <div className="product-name content">{shortName}</div>
      <div className="product-image content">
        <img src={data.image_link} alt={data.product_ID} className="mini-img" />
      </div>
      <div className="product-cost content">{parseInt(data.cost, 10)}</div>
      <div className="product-category content">{data.category}</div>
      <div className="product-stock content">{parseInt(data.stock, 10)}</div>
      <div className="content">
        <button type="button" className="btn-cancel delete" onClick={() => handleOnDelete()}>
          Xóa
        </button>
      </div>
    </button>
  )
}
