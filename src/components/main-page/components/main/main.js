import React from 'react'
import FilterBar from '../filter_bar/filter_bar'
import NewsFeed from '../news-feed/news_feed'
import ProductList from '../product-list/product_list'
import SearchBar from '../search-bar/search_bar'
import './main.css'

export default function Main() {
  return (
    <div id="home-page-container">
      <div id="home-page-sub-content">
        <div id="home-page-left-column">
          <div id="search-bar-container">
            <SearchBar />
          </div>
          <div id="filter-bar-container">
            <FilterBar />
          </div>
        </div>
        <div id="news-feed-container">
          <NewsFeed />
        </div>
      </div>
      <div id="products-list-container">
        <ProductList />
      </div>
    </div>
  )
}
