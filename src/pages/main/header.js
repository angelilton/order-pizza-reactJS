import React from 'react'
import styled from 'styled-components'
import { AppBar, Toolbar as MaterialToolbar } from '@material-ui/core'
import { Route, Switch } from 'react-router-dom'
import { CHECKOUT } from 'routes'
import HeaderCheckout from './header-checkout'
import MainHeader from './main-header'

const Header = () => (
  <AppBar>
    <Toolbar>
      <Switch>
        <Route path={CHECKOUT} component={HeaderCheckout} />
        <Route component={MainHeader} />
      </Switch>
    </Toolbar>
  </AppBar>
)

const Toolbar = styled(MaterialToolbar)`
  margin: 0 auto;
  width: 100%;
`

export default Header
