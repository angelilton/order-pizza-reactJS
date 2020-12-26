import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Container } from '@material-ui/core'

const FooterCheckout = ({ children, justifyContent = 'flex-end' }) => (
  <FooterWrapper>
    <Container>
      <ButtonWrapper justifyContent={justifyContent}>{children}</ButtonWrapper>
    </Container>
  </FooterWrapper>
)

FooterCheckout.propTypes = {
  children: PropTypes.node.isRequired,
  justifyContent: PropTypes.string
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
`

const FooterWrapper = styled.footer`
  box-shadow: 0 0 3px ${({ theme }) => theme.palette.grey[400]};
  padding: ${({ theme }) => theme.spacing(3)}px;
  width: 100%;
`

export default FooterCheckout
