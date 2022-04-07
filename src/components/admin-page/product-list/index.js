import React, { useEffect, useState } from 'react'
import './index.css'
import getProduct from '../../../utils/getProduct'
import ProductFrame from './product-frame/productFrame'
import Popup from './popup/popup'

export default function ProductList() {
  const [productList, setProductList] = useState(null)
  const [showPopProduct, setShowPop] = useState(false)
  const [dataInPop, setDataInPop] = useState(null)
  const [isCreating, setIsCreating] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    getProduct().then((productLst) => {
      setProductList(productLst)
    })
  }, [])

  useEffect(() => {
    getProduct().then((productLst) => {
      setProductList(productLst)
    })
  }, [showPopProduct])

  const changePopupState = () => {
    if (showPopProduct) {
      document.getElementById('popup-container').style.display = 'block'
    } else {
      document.getElementById('popup-container').style.display = 'none'
    }
  }

  const close = () => {
    setShowPop(false)
    setIsCreating(false)
    setIsDeleting(false)
    setDataInPop(null)
  }

  const openCreatePopup = () => {
    setIsCreating(true)
    setShowPop(true)
  }

  const openDeletePopup = (id) => {
    setDataInPop(id)
    setIsDeleting(true)
    setShowPop(true)
  }

  useEffect(() => {
    changePopupState()
  }, [showPopProduct])

  return (
    <div className="container">
      <div id="product-page-title">Danh sách sản phẩm</div>
      <div id="product-frame-list">
        <ProductFrame
          productList={productList}
          setDataInPop={setDataInPop}
          setShowPop={setShowPop}
          openDeletePopup={openDeletePopup}
        />
      </div>
      <Popup
        data={dataInPop}
        close={close}
        showPop={showPopProduct}
        isCreating={isCreating}
        isDeleting={isDeleting}
      />
      <button onClick={() => openCreatePopup()} type="button" id="add-btn">
        +
      </button>
    </div>
  )
}
