import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Grid,
  Paper,
  TextField as MaterialTextField
} from '@material-ui/core'
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
              <Grid container spacing={2}>
                <TextField label="CEP" xs={4} autoFocus />
                <Grid item xs={6} />
                <TextField label="Rua" xs={9} />
                <TextField label="Número" xs={3} />
                <TextField label="Complemento" xs={12} />
                <TextField label="Cidade" xs={8} />
                <TextField label="Estado" xs={4} />
              </Grid>
            </PaperWrapper>

            <Title>what is your phone number?</Title>
            <PaperWrapper>
              <TextField label="Telefone" xs={6} />
            </PaperWrapper>
          </Grid>

          <Grid container direction="column" item xs={12} md={6}>
            <Title>Your order:</Title>
            <PaperWrapper>
              <OrderInfo />
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

function TextField({ xs, autoFocus, ...props }) {
  return (
    <Grid item xs={xs}>
      <MaterialTextField
        fullWidth
        variant="outlined"
        inputProps={{ autoFocus }}
        {...props}
      />
    </Grid>
  )
}

TextField.propTypes = {
  autoFocus: PropTypes.bool,
  xs: PropTypes.number
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
