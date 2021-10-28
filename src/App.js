import React from 'react'
import {
  Switch, Route, Redirect, BrowserRouter as Router
} from 'react-router-dom'
import { AppProvider } from './utils/contextControl'
import Login from './components/login-page'
import Homepage from './components/main-page'
import Signup from './components/sign-up-page'
import Product from './components/product-page'

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
            <Redirect to="/home/product" />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/home/product">
            <Product />
          </Route>
        </Switch>
      </Router>
    </AppProvider>
  )
}

export default App
