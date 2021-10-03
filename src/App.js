import React from 'react'
import {
  Switch, Route, Redirect, BrowserRouter as Router
} from 'react-router-dom'
import Authpage from './components/auth-page'
import Navbar from './components/nav-bar'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login">
          <Authpage />
        </Route>
        <Route path="/home">
          <Navbar />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
