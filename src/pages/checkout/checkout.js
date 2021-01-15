import React from 'react'
import { Button, Grid, Paper } from '@material-ui/core'
import FormAddress from './form-address'
import { FooterCheckout, Title as UiTitle, Wrapper } from 'ui'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { CHECKOUT_CONFIRMATION } from 'routes'
import OrderInfo from './order-info'
import PhoneField from './phone-field'
import { useOrder } from 'hooks'

const Checkout = () => {
  const { addAddress, addPhone } = useOrder()

  return (
    <>
      <Wrapper>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Title>what is your address for delivery?</Title>
            <PaperWrapper>
              <FormAddress onUpdate={addAddress} />
            </PaperWrapper>

            <Title>what is your phone number?</Title>
            <PaperWrapper>
              <PhoneField onUpdate={addPhone} />
            </PaperWrapper>
          </Grid>

          <Grid container direction="column" item xs={12} md={6}>
            <Title>Your order:</Title>
            <PaperWrapper>
              <OrderInfo showOptions />
            </PaperWrapper>
          </Grid>
        </Grid>
      </Wrapper>

      <FooterCheckout>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to={CHECKOUT_CONFIRMATION}
        >
          Order
        </Button>
      </FooterCheckout>
    </>
  )
}

const Title = styled(UiTitle).attrs({
  variant: 'h6'
})`
  text-align: left;
`

const PaperWrapper = styled(Paper)`
  ${({ theme }) => css`
    flex-grow: 1;
    margin-bottom: ${theme.spacing(5)}px;
    padding: ${theme.spacing(2)}px;
  `}
`

export default Checkout
