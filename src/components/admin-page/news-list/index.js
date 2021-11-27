import React, { useEffect, useState } from 'react'
import './index.css'
import Popup from './popup/popup'
import getNews from '../../../utils/newsController'
import NewsFrame from './news-frame/newsFrame'

export default function NewsList() {
  const [newsList, setNewsList] = useState(null)
  const [showPopNews, setShowPopNews] = useState(false)
  const [dataInPop, setDataInPop] = useState(null)
  const [isCreating, setIsCreating] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    getNews().then((newsLst) => {
      setNewsList(newsLst)
    })
  }, [])

  const close = () => {
    setShowPopNews(false)
    setDataInPop(null)
    setIsCreating(false)
    setIsDeleting(false)
  }

  const openCreatePopup = () => {
    setIsCreating(true)
    setShowPopNews(true)
  }

  const changePopupState = () => {
    if (showPopNews) {
      document.getElementById('popup-container').style.display = 'block'
    } else {
      document.getElementById('popup-container').style.display = 'none'
    }
  }

  useEffect(() => {
    getNews().then((newsLst) => {
      setNewsList(newsLst)
    })
  }, [showPopNews])

  useEffect(() => {
    changePopupState()
  }, [showPopNews])

  const openDeletePopup = (id) => {
    setDataInPop(id)
    setIsDeleting(true)
    setShowPopNews(true)
  }

  return (
    <div className="container">
      <div id="news-page-title">Danh sách tin tức</div>
      <div id="news-list-frame">
        <NewsFrame
          newsList={newsList}
          setDataInPop={setDataInPop}
          setShowPop={setShowPopNews}
          openDeletePopup={openDeletePopup}
        />
      </div>
      <Popup
        close={close}
        data={dataInPop}
        showPop={showPopNews}
        isCreating={isCreating}
        isDeleting={isDeleting}
      />
      <button onClick={() => openCreatePopup()} type="button" id="add-btn">
        +
      </button>
    </div>
  )
}
