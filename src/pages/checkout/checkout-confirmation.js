import React from 'react'
import { useAuth, useOrder } from 'hooks'
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
import { CHECKOUT_SUCCESS } from 'routes'

import firebase, { db } from 'services/firebase'

const CheckoutConfirmation = () => {
  const { userInfo } = useAuth()
  const { order } = useOrder()

  async function sendOrder() {
    console.log('send order')
    try {
      await db.collection('orders').add({
        userId: userInfo.user.uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        address: order.address,
        phone: order.phone,
        pizzas: order.pizzas.map((pizza) => ({
          size: pizza.pizzaSize,
          flavours: pizza.pizzaFlavours,
          quantity: pizza.quantity
        }))
      })
    } catch (error) {
      console.log('error ao salvar pedido', error)
    }
  }

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
            <H6>order:</H6>
            <OrderInfo />

            <Divider />

            <H6>address:</H6>
            <Typography>
              CEP: {order.address.code}
              <br />
              ENDEREÇO: {order.address.address} {' Nº'} {order.address.number}
              <br />
              {order.address.district} - {order.address.city}/
              {order.address.state}
              <br />
              COMPLEMENTO: {order.address.complement}
            </Typography>

            <Divider />

            <H6>phone:</H6>
            <Typography>{order.phone}</Typography>
          </PaperWrapper>
        </Container>
      </Wrapper>
      <FooterCheckout justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link}
          to={CHECKOUT_SUCCESS}
          onClick={() => sendOrder()}
        >
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
