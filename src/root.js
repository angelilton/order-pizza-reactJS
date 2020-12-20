import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { CssBaseline, createMuiTheme } from '@material-ui/core'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
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
        <GlobalStyle />
        <Router>
          <Route component={App} />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  )
}

const GlobalStyle = createGlobalStyle`
#root {
  display: flex;
  flex-direction: column;
  min-height:100vh;
}
`

export default hot(Root)
