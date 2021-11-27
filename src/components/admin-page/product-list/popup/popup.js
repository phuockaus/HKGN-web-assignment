/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import './popup.css'
import updateProduct, { addProduct, deleteProduct } from '../../../../utils/productController'

export default function Popup({
  data, showPop, close, isCreating, isDeleting
}) {
  const [productName, setProductName] = useState('')
  const [productID, setProductID] = useState()
  const [image, setImage] = useState(null)
  const [cost, setCost] = useState()
  const [category, setCategory] = useState('')
  const [stock, setStock] = useState()
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (isCreating) {
      setProductID(null)
      setProductName('')
      setImage('')
      setCost(0)
      setCategory('')
      setDescription('')
      setStock(0)
    } else if (data) {
      setProductID(data.product_ID)
      setProductName(data.name)
      setImage(data.image_link)
      setCost(data.cost)
      setCategory(data.category)
      setStock(parseInt(data.stock, 10))
      setDescription(data.description)
    }
  }, [showPop])

  const triggerUpdate = () => {
    if (isCreating) {
      const input = {
        name: productName,
        newCost: cost,
        newCategory: category,
        newDescription: description,
        imageLink: image,
        newStock: stock
      }
      addProduct(input)
    } else {
      const input = {
        name: productName,
        newCost: cost,
        newCategory: category,
        newDescription: description,
        imageLink: image,
        newStock: stock
      }
      updateProduct(productID, input)
    }

    close()
  }

  const confirmDelete = () => {
    deleteProduct(productID)
    close()
  }

  return isDeleting ? (
    <div id="popup-container">
      <div id="popup-content-mini">
        Bạn muốn xóa sản phẩm này?
        <div className="button-container">
          <button type="button" className="btn" id="btn-save" onClick={() => confirmDelete()}>
            Xóa
          </button>
          <button type="button" className="btn-cancel" id="btn-cancel" onClick={() => close()}>
            Hủy
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div id="popup-container">
      <div id="popup-contents">
        <div className="form-section">
          <div id="title">Cập nhật sản phẩm</div>
          <div className="form-row">
            <div className="label">Tên sản phẩm</div>
            <input
              type="text"
              className="input"
              value={productName}
              onChange={(event) => setProductName(event.target.value)}
            />
            <div className="label">Giá tiền</div>
            <input
              type="text"
              className="input"
              value={parseInt(cost, 10)}
              onChange={(event) => setCost(parseInt(event.target.value, 10))}
            />
          </div>
          <div className="form-row">
            <div className="label">Link ảnh</div>
            <input
              type="text"
              className="input"
              value={image}
              onChange={(event) => setImage(event.target.value)}
            />
            <div className="label">Phân loại</div>
            <input
              type="text"
              className="input"
              placeholder="cà phê hòa tan, cà phê bột, dụng cụ pha"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            />
          </div>
          <div className="form-row-last">
            <div className="label">Số lượng trong kho</div>
            <input
              type="number"
              className="input"
              value={stock}
              onChange={(event) => setStock(parseInt(event.target.value, 10))}
            />
          </div>
          <div className="form-row-last">
            <textarea
              placeholder="Miêu tả sản phẩm"
              className="text-area"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
          <div className="button-container">
            <button type="button" className="btn" id="btn-save" onClick={() => triggerUpdate()}>
              Lưu
            </button>
            <button type="button" className="btn-cancel" id="btn-cancel" onClick={() => close()}>
              Hủy
            </button>
          </div>
        </div>
        <div className="demo-images">
          <img src={image} alt="hình ảnh demo" className="demo" />
        </div>
      </div>
    </div>
  )
}
