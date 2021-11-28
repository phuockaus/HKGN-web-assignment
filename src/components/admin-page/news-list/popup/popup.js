/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import './popup.css'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { updateNews, createNews, deleteNews } from '../../../../utils/newsController'

export default function Popup({
  data, showPop, close, isCreating, isDeleting
}) {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [position, setPosition] = useState(0)
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (isCreating) {
      setTitle('')
      setImage('')
      setPosition(0)
      setDescription('')
    } else if (data) {
      setTitle(data.title)
      setImage(data.image_link)
      setPosition(data.position)
      setDescription(data.content)
    }
  }, [showPop])

  const handleEditorChange = (e, editor) => {
    setDescription(editor.getData())
  }

  const confirmDelete = () => {
    deleteNews(data.news_ID)
    close()
  }

  const handleSave = () => {
    if (isCreating) {
      const input = {
        title,
        image,
        description,
        position
      }
      createNews(input)
    } else {
      const input = {
        title,
        image,
        description,
        position
      }
      updateNews(data.news_ID, input)
    }
    close()
  }

  return isDeleting ? (
    <div id="popup-container">
      <div id="popup-content-mini">
        Bạn muốn xóa tin tức này?
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
      <div id="popup-content">
        <div id="title">Cập nhật tin tức</div>
        <div className="form-row">
          <div className="label">Tiêu đề bài viết</div>
          <input
            type="text"
            className="input"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <div className="label">Hình ảnh tiêu đề</div>
          <input
            type="text"
            className="input"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
          <div className="label">Vị trí trên trang chủ</div>
          <select
            className="selector"
            value={position}
            onChange={(event) => setPosition(event.target.value)}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="img-row">
          <img src={image} alt="demo-img" className="demo-img" />
        </div>
        <div className="editor">
          <div className="label label-right">Nội dung bài viết</div>
          <CKEditor
            editor={ClassicEditor}
            data={description}
            onChange={handleEditorChange}
          />
        </div>
        <div className="button-container">
          <button
            type="button"
            className="btn"
            id="btn-save"
            onClick={() => handleSave()}
          >
            Lưu
          </button>
          <button
            type="button"
            className="btn-cancel"
            id="btn-cancel"
            onClick={() => close()}
          >
            Hủy
          </button>
        </div>
      </div>
    </div>
  )
}
