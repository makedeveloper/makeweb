
//libraries
import React from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import { useRecoilValue } from 'recoil'

import { signin as sg } from './store/atoms'

import Home from './pages/Home.js'
import Signin from './pages/Signin.js'
import Signup from './pages/Signup.js'
import Header from './pages/layout/Header.js'
import Footer from './pages/layout/Footer.js'
import Profile from './pages/Profile.js'

import './assets/css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route component={Header} />
        <Switch>
          <Route path='/signin' exact component={Signin} />
          <Route path='/signup' exact component={Signup} />
          <Route exact path="/" component={Home} />
          <ProtectedRoute path='/profile'>
            <Profile />
          </ProtectedRoute>
        </Switch>
        <Route component={Footer} />
      </Router>
    </div>
  );
}


function ProtectedRoute(comp) {
  const { children, ...rest } = comp
  const signin = useRecoilValue(sg)

  return (
    <Route
      {...rest}
      render={
        (
          { location }
        ) =>
          signin
            ? children
            : <Redirect
              to={{
                pathname: "/signin",
                state: { from: location }
              }}
            />
      }
    />
  )

}

export default App;
