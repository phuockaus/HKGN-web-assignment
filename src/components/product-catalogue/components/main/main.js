import React from 'react'
import ProductList from '../product-list/product_list'
import FilterSearchBar from '../search-bar/filter_search_bar'
import './main.css'

export default function Main() {
  return (
    <div id="catalogue-page-container">
      <div id="catalogue-page-content">
        <div id="search-filter-bar-container">
          <FilterSearchBar />
        </div>
        <div id="catalogue-products-container">
          <ProductList />
        </div>
      </div>
    </div>
  )
}
