import React, { useEffect, useState } from 'react'
import './index.css'
import Popup from './popup/popup'
import getNews from '../../../utils/newsController'
import NewsFrame from './news-frame/newsFrame'

export default function NewsList() {
  const [newsList, setNewsList] = useState(null)
  const [showPop, setShowPop] = useState(false)
  const [dataInPop, setDataInPop] = useState(null)
  const [isCreating, setIsCreating] = useState(false)

  useEffect(() => {
    getNews().then((newsLst) => {
      setNewsList(newsLst)
    })
  }, [])

  const close = () => {
    setShowPop(false)
    setDataInPop(null)
    setIsCreating(false)
  }

  const openCreatePopup = () => {
    setIsCreating(true)
    setShowPop(true)
  }

  const changePopupState = () => {
    if (showPop) {
      document.getElementById('popup-container').style.display = 'block'
    } else {
      document.getElementById('popup-container').style.display = 'none'
    }
  }

  useEffect(() => {
    getNews().then((newsLst) => {
      setNewsList(newsLst)
    })
  }, [showPop])

  useEffect(() => {
    changePopupState()
  }, [showPop])

  return (
    <div className="container">
      <div id="news-page-title">Danh sách tin tức</div>
      <div id="news-list-frame">
        <NewsFrame newsList={newsList} setDataInPop={setDataInPop} setShowPop={setShowPop} />
      </div>
      <Popup close={close} data={dataInPop} showPop={showPop} isCreating={isCreating} />
      <button onClick={() => openCreatePopup()} type="button" id="add-btn">
        +
      </button>
    </div>
  )
}
