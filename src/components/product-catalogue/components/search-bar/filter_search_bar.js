/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react'
import { AppContext } from '../../../../utils/contextControl'
import './filter_search_bar.css'

export default function FilterSearchBar() {
  const [details, setDetails] = useState({
    search_name: '',
    cate_1: false,
    cate_2: false,
    cate_3: false,
    cate_4: false
  })
  const { filterProducts } = useContext(AppContext)
  const search = () => {
    filterProducts(details)
  }

  return (
    <div id="filter-search-bar-area">
      <div id="search-bar-area">
        <input
          className="search-filter-item"
          type="text"
          placeholder="Nhập tên sản phẩm"
          name="name"
          value={details.search_name}
          onChange={(event) => {
            setDetails({ ...details, search_name: event.target.value })
          }}
        />
        <input
          type="button"
          value="Search"
          onClick={search}
        />
      </div>
      <div id="filter-bar-area">
        <div id="category-container">
          <div id="category-title">
            Danh mục sản phẩm
          </div>
          <input
            type="checkbox"
            name="cat"
            value={details.cate}
            onChange={() => {
              if (!details.cate_1) setDetails({ ...details, cate_1: true })
              else setDetails({ ...details, cate_1: false })
            }}
          />
          <label htmlFor="cat">Cà phê bột</label>
          <br />
          <input
            type="checkbox"
            name="cat"
            value={details.cate_2}
            onChange={() => {
              if (!details.cate_2) setDetails({ ...details, cate_2: true })
              else setDetails({ ...details, cate_2: false })
            }}
          />
          <label htmlFor="cat">Cà phê hòa tan</label>
          <br />
          <input
            type="checkbox"
            name="cat"
            value={details.cate_3}
            onChange={() => {
              if (!details.cate_3) setDetails({ ...details, cate_3: true })
              else setDetails({ ...details, cate_3: false })
            }}
          />
          <label htmlFor="cat">Dụng cụ cà phê</label>
          <br />
          <input
            type="checkbox"
            name="cat"
            value={details.cate_4}
            onChange={() => {
              if (!details.cate_4) setDetails({ ...details, cate_4: true })
              else setDetails({ ...details, cate_4: false })
            }}
          />
          <label htmlFor="cat">Máy pha cà phê</label>
        </div>

        <select className="search-filter-item">
          <option value="label">Giá</option>
          <option value="less">Dưới 100.000</option>
          <option value="equal1">Từ 100.000 đến 500.000</option>
          <option value="equal2">Từ 500.000 đến 1.000.000</option>
          <option value="more">Trên 1.000.000</option>
        </select>
        <select className="search-filter-item">
          <option value="label">Đánh giá</option>
          <option value="1">1 sao</option>
          <option value="2">2 sao</option>
          <option value="3">3 sao</option>
          <option value="4">4 sao</option>
          <option value="5">5 sao</option>
        </select>
        <select className="search-filter-item">
          <option value="label">Sắp xếp</option>
          <option value="1">Giá từ thấp đến cao</option>
          <option value="2">Giá từ cao đến thấp</option>
        </select>
        <input
          type="button"
          value="Filter"
          onClick={search}
        />
      </div>
    </div>
  )
}
