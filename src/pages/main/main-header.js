import React, { useState } from 'react'
import styled from 'styled-components'
import { IconButton, Typography, Menu, MenuItem } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import Logo from './logo'
import { useAuth } from 'hooks'
import { Link } from 'react-router-dom'
import { HOME } from 'routes'

const MainHeader = () => {
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
    <>
      <LogoContainer>
        <LinkLogo to={HOME}>
          <Logo />
        </LinkLogo>
      </LogoContainer>
      <Typography>hey, {showUserName}</Typography>

      <IconButton color="inherit" onClick={handleOpenMenu}>
        <AccountCircle />
      </IconButton>

      <Menu open={open} onClose={handleClose} anchorEl={anchorElement}>
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </>
  )
}

const LinkLogo = styled(Link)`
  display: inline-block;
`

const LogoContainer = styled.div`
  flex-grow: 1;
`

export default MainHeader
