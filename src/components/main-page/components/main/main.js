import React from 'react'
import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom'
import { decode } from 'string-encode-decode'
import NewsFeed from '../news-feed/news_feed'
import ProductList from '../product-list/product_list'
import './main.css'

export default function Main() {
  if (String(decode(Cookies.get('role'))) === 'admin') return <Redirect to="/admin-page" />
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
