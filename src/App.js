import React, { useState, useEffect, lazy, Suspense, useContext } from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route, Switch } from 'react-router-dom'
import firebase from 'services/firebase'
import { AuthContext } from 'contexts/auth'

import { LinearProgress } from '@material-ui/core'
import { HOME, LOGIN } from 'routes'

const MainPage = lazy(() => import('pages/main'))
const Login = lazy(() => import('pages/login'))

function App({ location }) {
  const { userInfo, setUserInfo } = useContext(AuthContext)
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
  }, [setUserInfo])

  if (!didCheckUserIn) {
    return <LinearProgress />
  }

  if (isUserLoggedIn && location.pathname === LOGIN) {
    return <Redirect to={HOME} />
  }

  if (!isUserLoggedIn && location.pathname !== LOGIN) {
    return <Redirect to={LOGIN} />
  }

  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path={LOGIN} component={Login} />
        <Route component={MainPage} />
      </Switch>
    </Suspense>
  )
}

App.propTypes = {
  location: PropTypes.object.isRequired
}
export default App
