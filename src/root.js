import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { CssBaseline, createMuiTheme } from '@material-ui/core'
import { ThemeProvider } from 'styled-components'
import AuthProvider from 'contexts/auth'
import App from './app'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
})

console.log('theme:', theme)

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <CssBaseline />
        <Router>
          <Route component={App} />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  )
}
export default hot(Root)
