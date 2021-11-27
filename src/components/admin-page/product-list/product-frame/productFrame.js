/* eslint-disable react/prop-types */
import React from 'react'
import ProductItem from './productItem/productItem'
import './productFrame.css'

export default function ProductFrame({
  productList, setDataInPop, setShowPop, openDeletePopup
}) {
  const renderProductList = () => {
    if (productList) {
      return productList.map((product) => (
        <ProductItem
          data={product}
          setDataInPop={setDataInPop}
          setShowPop={setShowPop}
          openDeletePopup={openDeletePopup}
        />
      ))
    }
    return null
  }

  return (
    <div id="product-frame-container">
      <div id="table-title">
        <div className="title">Mã sản phẩm</div>
        <div className="title">Tên sản phẩm</div>
        <div className="title">Hình ảnh</div>
        <div className="title">Giá tiền</div>
        <div className="title">Phân loại</div>
        <div className="title">Hàng trong kho</div>
        <div className="title" />
      </div>
      <div id="product-frame-content">{renderProductList()}</div>
    </div>
  )
}
