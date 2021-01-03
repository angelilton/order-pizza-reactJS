import React from 'react'

import { Button, Grid, Paper } from '@material-ui/core'
import TextField from './text-field'
import FormAddress from './form-address'
import { FooterCheckout, Title as UiTitle, Wrapper } from 'ui'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { CHECKOUT_CONFIRMATION } from 'routes'
import OrderInfo from './order-info'

const Checkout = () => {
  return (
    <>
      <Wrapper>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Title>what is your address for delivery?</Title>
            <PaperWrapper>
              <FormAddress />
            </PaperWrapper>

            <Title>what is your phone number?</Title>
            <PaperWrapper>
              <TextField label="Telefone" xs={6} />
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
