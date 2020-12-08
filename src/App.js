import React, { useState, useEffect, lazy, Suspense, useContext } from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route, Switch } from 'react-router-dom'
import firebase from 'services/firebase'
import { AuthContext } from 'contexts/auth'

import { LinearProgress } from '@material-ui/core'

const MainPage = lazy(() => import('pages/main'))
const Login = lazy(() => import('pages/login'))

function App({ location }) {
  const { userInfo, setUserInfo, logout } = useContext(AuthContext)
  const [didCheckUserIn, setDidCheckUserIn] = useState(false)

  const { isUserLoggedIn } = userInfo

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('user data:', user)
      setUserInfo({
        isUserLoggedIn: !!user,
        user
      })
      setDidCheckUserIn(true)
    })
    window.logout = logout
  }, [])

  if (!didCheckUserIn) {
    return <LinearProgress />
  }

  if (isUserLoggedIn && location.pathname === '/login') {
    return <Redirect to="/" />
  }

  if (!isUserLoggedIn && location.pathname !== '/login') {
    return <Redirect to="/login" />
  }

  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={MainPage} />
      </Switch>
    </Suspense>
  )
}

App.propTypes = {
  location: PropTypes.object.isRequired
}
export default App
