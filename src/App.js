/* eslint-disable react/no-children-prop */
import React from 'react'
import {
  Switch, Route, Redirect, BrowserRouter as Router
} from 'react-router-dom'
import { AppProvider } from './utils/contextControl'
import Login from './components/login-page'
import Homepage from './components/main-page'
import Signup from './components/sign-up-page'
import ProductInfo from './components/product-page'
import Catalogue from './components/product-catalogue'
import Cart from './components/cart-page'
import PaymentInfo from './components/payment-page'
import AccountInfo from './components/account-info'
import NewsCatalogue from './components/news-catalogue'
import NewsPage from './components/news-page'
import OrderPage from './components/order-page'
import AdminPage from './components/admin-page'

function App() {
  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Homepage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/product/:id" component={ProductInfo} />
          <Route path="/catalogue">
            <Catalogue />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/payment">
            <PaymentInfo />
          </Route>
          <Route path="/account-info">
            <AccountInfo />
          </Route>
          <Route path="/news/:newsid" component={NewsPage} />
          <Route path="/news">
            <NewsCatalogue />
          </Route>
          <Route path="/order">
            <OrderPage />
          </Route>
          <Route path="/">
            <AdminPage />
          </Route>
        </Switch>
      </Router>
    </AppProvider>
  )
}

export default App
