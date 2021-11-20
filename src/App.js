/* eslint-disable react/no-children-prop */
import React from 'react'
import {
  Switch, Route, Redirect, BrowserRouter as Router
} from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'
import { AppProvider } from './utils/contextControl'
import Login from './components/login-page'
import Homepage from './components/main-page'
import Signup from './components/sign-up-page'
import ProductInfo from './components/product-page'
import Catalogue from './components/product-catalogue'
import AccountInfo from './components/account-info'

function App() {
  return (
    <CookiesProvider>
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
            <Route path="/account-info">
              <AccountInfo />
            </Route>
          </Switch>
        </Router>
      </AppProvider>
    </CookiesProvider>
  )
}

export default App
