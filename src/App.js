import React from 'react'
import {
  Switch, Route, Redirect, BrowserRouter as Router
} from 'react-router-dom'
import Login from './components/login-page'
import Signup from './components/sign-up-page'
import Product from './components/product-page'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
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
  )
}

export default App
