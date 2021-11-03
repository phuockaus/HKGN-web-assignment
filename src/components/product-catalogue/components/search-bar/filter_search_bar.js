/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useState } from 'react'
import filtering from '../../../../utils/filter'
import { AppContext } from '../../../../utils/contextControl'
import './filter_search_bar.css'

export default function FilterSearchBar({ filter }) {
  const { productList } = useContext(AppContext)
  const [details, setDetails] = useState({
    search_name: '',
    cate_1: false,
    cate_2: false,
    cate_3: false,
    cate_4: false,
    cost: 'none',
    rate: 'none'
  })

  const search = () => {
    filter(filtering(details, productList))
  }

  const reset = () => {
    const res = {
      search_name: '',
      cate_1: false,
      cate_2: false,
      cate_3: false,
      cate_4: false,
      cost: 'none',
      rate: 'none'
    }
    filter(productList)
    setDetails(res)
    const checkbox = document.querySelectorAll('.cat')
    for (let i = 0; i < checkbox.length; i += 1) {
      checkbox[i].checked = false
    }
  }

  return (
    <div id="filter-search-bar-area">
      <div id="search-bar-area">
        <input
          className="search-filter-item"
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          name="name"
          value={details.search_name}
          onChange={(event) => {
            setDetails({ ...details, search_name: event.target.value })
          }}
        />
      </div>
      <div id="filter-bar-area">
        <div id="category-container">
          <div id="category-title">
            Danh mục sản phẩm
          </div>
          <input
            type="checkbox"
            className="cat"
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
            className="cat"
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
            className="cat"
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
            className="cat"
            value={details.cate_4}
            onChange={() => {
              if (!details.cate_4) setDetails({ ...details, cate_4: true })
              else setDetails({ ...details, cate_4: false })
            }}
          />
          <label htmlFor="cat">Máy pha cà phê</label>
        </div>
        <div id="filter-cost-area">
          <select
            className="search-filter-item"
            value={details.cost}
            onChange={(event) => {
              setDetails({ ...details, cost: event.target.value })
            }}
          >
            <option value="none">Giá</option>
            <option value="less">Dưới 100.000</option>
            <option value="equal1">Từ 100.000 đến 500.000</option>
            <option value="equal2">Từ 500.000 đến 1.000.000</option>
            <option value="more">Trên 1.000.000</option>
          </select>
        </div>
        <div id="filter-rate-area">
          <select
            className="search-filter-item"
            value={details.rate}
            onChange={(event) => {
              setDetails({ ...details, rate: event.target.value })
            }}
          >
            <option value="none">Đánh giá</option>
            <option value="1">Dưới 1 sao</option>
            <option value="2">Từ 1-2 sao</option>
            <option value="3">Từ 2-3 sao</option>
            <option value="4">Từ 3-4 sao</option>
            <option value="5">Từ 4-5 sao</option>
          </select>
        </div>
      </div>
      <input
        id="filter-search"
        className="button"
        type="button"
        value="Tìm kiếm"
        onClick={search}
      />
      <input
        id="filter-reset"
        className="button"
        type="button"
        value="Đặt lại"
        onClick={reset}
      />
    </div>
  )
}
