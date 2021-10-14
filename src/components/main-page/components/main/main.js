import React from 'react'
import NewsFeed from '../news-feed/news_feed'
import ProductList from '../product-list/product_list'
import './main.css'

export default function Main() {
  return (
    <div id="home-page-container">
      <div id="home-page-content">
        <div id="news-feed-container">
          <NewsFeed />
        </div>
        <div id="best-products-list-container">
          <ProductList />
        </div>
      </div>
    </div>
  )
}
