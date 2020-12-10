import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import AuthProvider from 'contexts/auth'
import App from './app'

function Root() {
  return (
    <AuthProvider>
      <CssBaseline />
      <Router>
        <Route component={App} />
      </Router>
    </AuthProvider>
  )
}
export default hot(Root)
