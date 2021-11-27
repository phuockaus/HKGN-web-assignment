import React, { useEffect, useState } from 'react'
import './index.css'
import getProduct from '../../../utils/getProduct'
import ProductFrame from './product-frame/productFrame'
import Popup from './popup/popup'

export default function ProductList() {
  const [productList, setProductList] = useState(null)
  const [showPop, setShowPop] = useState(false)
  const [dataInPop, setDataInPop] = useState(null)
  const [isCreating, setIsCreating] = useState(false)

  useEffect(() => {
    getProduct().then((productLst) => {
      setProductList(productLst)
    })
  }, [])

  useEffect(() => {
    getProduct().then((productLst) => {
      setProductList(productLst)
    })
  }, [showPop])

  const changePopupState = () => {
    if (showPop) {
      document.getElementById('popup-container').style.display = 'block'
    } else {
      document.getElementById('popup-container').style.display = 'none'
    }
  }

  const close = () => {
    setShowPop(false)
    setIsCreating(false)
    setDataInPop(null)
  }

  const openCreatePopup = () => {
    setIsCreating(true)
    setShowPop(true)
  }

  useEffect(() => {
    changePopupState()
  }, [showPop])

  return (
    <div className="container">
      <div id="product-page-title">Danh sách sản phẩm</div>
      <div id="product-frame-list">
        <ProductFrame
          productList={productList}
          setDataInPop={setDataInPop}
          setShowPop={setShowPop}
        />
      </div>
      <Popup data={dataInPop} close={close} showPop={showPop} isCreating={isCreating} />
      <button onClick={() => openCreatePopup()} type="button" id="add-btn">
        +
      </button>
    </div>
  )
}
