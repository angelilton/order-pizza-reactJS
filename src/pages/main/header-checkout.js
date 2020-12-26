import React from 'react'
import styled from 'styled-components'
import Logo from './logo'

const HeaderCheckout = () => (
  <LogoWrapper>
    <Logo />
  </LogoWrapper>
)

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`

export default HeaderCheckout
