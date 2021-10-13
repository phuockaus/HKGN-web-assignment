import React from 'react'
import {
  Switch, Route, Redirect, BrowserRouter as Router
} from 'react-router-dom'
import Login from './components/login-page'
import Homepage from './components/main-page'
import Signup from './components/sign-up-page'

function App() {
  return (
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
      </Switch>
    </Router>
  )
}

export default App
