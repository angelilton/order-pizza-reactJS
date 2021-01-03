import React from 'react'
import { useAuth } from 'hooks'
import { H4, H6, Wrapper } from 'ui'

import styled from 'styled-components'
import {
  Container,
  Paper,
  Typography,
  Divider as MDivider,
  Button
} from '@material-ui/core'
import OrderInfo from './order-info'
const CheckoutSuccess = () => {
  const { userInfo, logout } = useAuth()
  const showUserName = userInfo.user.displayName.split(' ')[0]

  return (
    <Wrapper>
      <Header>
        <H4>{showUserName} your order is succeeded </H4>
        <H6>
          your order is on its way in <strong>45min</strong>
        </H6>
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
        <BtnWrapper>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={logout}
          >
            login-out
          </Button>
        </BtnWrapper>
      </Container>
    </Wrapper>
  )
}

const BtnWrapper = styled.div`
  margin: ${({ theme }) => theme.spacing(3, 0)};
  display: flex;
  justify-content: center;
  text-align: center;
`

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

export default CheckoutSuccess
