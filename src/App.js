import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'

import { MainPage } from './pages/main'
import { Login } from './pages/login'

const app = () => (
  <>
    <CssBaseline />
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={MainPage} />
      </Switch>
    </Router>
  </>
)

export default app
