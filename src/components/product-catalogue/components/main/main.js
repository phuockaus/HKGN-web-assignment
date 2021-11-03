/* eslint-disable max-len */
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../../../utils/contextControl'
import ProductLists from '../product-list/product_list'
import FilterSearchBar from '../search-bar/filter_search_bar'
// import filtering from '../../../../utils/filter'
import './main.css'

export default function Main() {
  const { productList } = useContext(AppContext)
  const [filterProducts, setFilterProducts] = useState(productList)

  const filter = (res) => {
    setFilterProducts(res)
  }

  useEffect(() => {
    filter(productList)
  }, [productList])

  return (
    <div id="catalogue-page-container">
      <div id="catalogue-page-content">
        <div id="search-filter-bar-container">
          <FilterSearchBar filter={filter} />
        </div>
        <div id="catalogue-products-container">
          <ProductLists filterProducts={filterProducts} />
        </div>
      </div>
    </div>
  )
}
