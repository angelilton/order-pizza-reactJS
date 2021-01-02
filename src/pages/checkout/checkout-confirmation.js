import React from 'react'
import { useAuth } from 'hooks'
import { FooterCheckout, H4, H6, Wrapper } from 'ui'

import styled from 'styled-components'
import {
  Button,
  Container,
  Paper,
  Typography,
  Divider as MDivider
} from '@material-ui/core'
import OrderInfo from './order-info'
import { Link } from 'react-router-dom'
import { HOME } from 'routes'

const CheckoutConfirmation = () => {
  const { userInfo } = useAuth()
  const showUserName = userInfo.user.displayName.split(' ')[0]

  return (
    <>
      <Wrapper>
        <Header>
          <H4>almost there {showUserName}</H4>
          <Typography>We just need you to confirm the order below:</Typography>
        </Header>

        <Container maxWidth="sm">
          <PaperWrapper>
            <H6>order</H6>
            <OrderInfo />

            <Divider />

            <H6>address</H6>
            <Typography>12 james street - Cork</Typography>

            <Divider />

            <H6>phone</H6>
            <Typography>(44) 98888-7777</Typography>
          </PaperWrapper>
        </Container>
      </Wrapper>
      <FooterCheckout justifyContent="center">
        <Button variant="contained" color="primary" component={Link} to={HOME}>
          confirm
        </Button>
      </FooterCheckout>
    </>
  )
}

const Divider = styled(MDivider)`
  margin: ${({ theme }) => theme.spacing(3, 0)};
`

const PaperWrapper = styled(Paper)`
  padding: ${({ theme }) => theme.spacing(3, 3)};
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing(3)}px;
`

export default CheckoutConfirmation
