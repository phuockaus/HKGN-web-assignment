/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import './filter_bar.css'

export default function FilterBar() {
  return (
    <div id="filter-bar">
      <div id="title-filter-area">
        Danh mục sản phẩm
      </div>
      <div className="filter-option">
        <input
          type="radio"
          id="option-1"
        />
        <label htmlFor="option-1">Cà phê bột</label>
      </div>
      <div className="filter-option">
        <input
          type="radio"
          id="option-2"
        />
        <label htmlFor="option-2">Cà phê hòa tan</label>
      </div>
      <div className="filter-option">
        <input
          type="radio"
          id="option-3"
        />
        <label htmlFor="option-3">Dụng cụ cà phê</label>
      </div>
      <div className="filter-option">
        <input
          type="radio"
          id="option-4"
        />
        <label htmlFor="option-4">Máy pha cà phê</label>
      </div>
    </div>
  )
}
