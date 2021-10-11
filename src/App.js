import React from 'react'
import {
  Switch, Route, Redirect, BrowserRouter as Router
} from 'react-router-dom'
import Signup from './components/sign-up-page'

// import LoginForm from './components/login-page/components/login_form/form'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login">
          <Signup />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
