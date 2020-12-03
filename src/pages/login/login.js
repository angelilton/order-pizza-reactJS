import React, { useEffect, useState } from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import { Button, Grid } from '@material-ui/core'
import { ReactComponent as MainLogo } from './logo-react-zzaria.svg'
import styled from 'styled-components'

var firebaseConfig = {
  apiKey: 'AIzaSyDs66oM0amq4p8APVaXqLxQZB28gn1dAfQ',
  authDomain: 'orderpizza-9366b.firebaseapp.com',
  databaseURL: 'https://orderpizza-9366b.firebaseio.com',
  projectId: 'orderpizza-9366b',
  storageBucket: 'orderpizza-9366b.appspot.com',
  messagingSenderId: '592854066413',
  appId: '1:592854066413:web:d22e00ed0754e63f82d8e4',
  measurementId: 'G-ST59GV8GWJ'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// firebase.analytics()

const Login = () => {
  const [user, setUser] = useState({
    isUserLoggedIn: false,
    user: null
  })

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('user data:', user)
      setUser({
        isUserLoggedIn: !!user,
        user: user
      })
    })
  }, [])

  const gitHubAuthentication = () => {
    const provider = new firebase.auth.GithubAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }

  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('deslogou!')
        setUser({
          isUserLoggedIn: false,
          user: null
        })
      })
  }

  return (
    <Container>
      <Grid container justify="center" spacing={10}>
        <Grid item>
          <Logo />
        </Grid>

        <Grid item xs={12} container justify="center">
          {user.isUserLoggedIn && (
            <>
              <pre>{user.user.displayName}</pre>
              <Button variant="contained" onClick={logout}>
                Sair
              </Button>
            </>
          )}

          {!user.isUserLoggedIn && (
            <GitHubBtn onClick={gitHubAuthentication}>
              Entrar com GitHub
            </GitHubBtn>
          )}
        </Grid>
      </Grid>
    </Container>
  )
}

const Container = styled.div`
  padding: 20px;
`

const Logo = styled(MainLogo)`
  width: 100%;
`
const GitHubBtn = styled(Button).attrs({
  variant: 'contained',
  fullWidth: true
})`
  && {
    font-size: 25px;
    padding: 15px;
    max-width: 480px;
    text-transform: none;
  }
`

export default Login
