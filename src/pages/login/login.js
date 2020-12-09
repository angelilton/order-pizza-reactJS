import React, { useContext } from 'react'
import { Button, Grid } from '@material-ui/core'
import { ReactComponent as MainLogo } from 'images/logo-react-zzaria.svg'
import styled from 'styled-components'
import { AuthContext } from 'contexts/auth'

function Login() {
  const { login } = useContext(AuthContext)

  return (
    <Container>
      <Grid container justify="center" spacing={10}>
        <Grid item>
          <Logo />
        </Grid>

        <Grid item xs={12} container justify="center">
          <GitHubBtn onClick={login}>Entrar com GitHub</GitHubBtn>
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
