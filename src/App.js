import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CssBaseline, LinearProgress } from '@material-ui/core'

const MainPage = lazy(() => import('pages/main'))
const Login = lazy(() => import('pages/login'))

const app = () => (
  <>
    <CssBaseline />
    <Router>
      <Suspense fallback={<LinearProgress />}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={MainPage} />
        </Switch>
      </Suspense>
    </Router>
  </>
)

export default app
