import React, { useState } from 'react'
import styled from 'styled-components'
import {
  AppBar,
  Toolbar as MaterialToolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem
} from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import { ReactComponent as MainLogo } from 'images/logo-react-zzaria.svg'
import { useAuth } from 'hooks'

const Header = () => {
  const [anchorElement, setAnchorElement] = useState(null)
  const { userInfo, logout } = useAuth()

  const handleOpenMenu = (e) => {
    setAnchorElement(e.target)
  }
  const handleClose = () => {
    setAnchorElement(null)
  }

  const showUserName = userInfo.user.displayName.split(' ')[0]

  const open = Boolean(anchorElement)

  return (
    <AppBar>
      <Toolbar>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <Typography>hey, {showUserName}</Typography>

        <IconButton color="inherit" onClick={handleOpenMenu}>
          <AccountCircle />
        </IconButton>

        <Menu open={open} onClose={handleClose} anchorEl={anchorElement}>
          <MenuItem onClick={logout}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

const Toolbar = styled(MaterialToolbar)`
  margin: 0 auto;
  width: 100%;
`

const LogoContainer = styled.div`
  flex-grow: 1;
`
const Logo = styled(MainLogo)`
  height: 50px;
  width: 200px;

  & path {
    fill: #fff;
  }
  & line {
    stroke: #fff;
  }
`

export default Header
