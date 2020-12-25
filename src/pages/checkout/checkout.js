import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  List,
  ListItem,
  Paper,
  TextField as MaterialTextField,
  Typography
} from '@material-ui/core'
import { Title as UiTitle, Wrapper } from 'ui'
import styled, { css } from 'styled-components'
import { useOrder } from 'hooks'
import { singularOrPlural } from 'utils'

const Checkout = () => {
  const { order } = useOrder()
  console.log('order:', order)

  return (
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
            <List>
              {order.pizzas.map((pizza, index) => {
                const { pizzaFlavours, pizzaSize, quantity } = pizza

                return (
                  <ListItem key={index}>
                    <Typography>
                      {quantity}
                      {' - '} {singularOrPlural(quantity, 'pizza', 'pizzas')}{' '}
                      <b>{pizzaSize.name.toUpperCase()}</b>
                      <br />
                      {singularOrPlural(
                        pizzaFlavours.length,
                        'Flavour: ',
                        'Flavours: '
                      )}{' '}
                      <b>{pizzaFlavours.map(({ name }) => name).join(', ')}</b>
                    </Typography>
                  </ListItem>
                )
              })}
            </List>
          </PaperWrapper>
        </Grid>
      </Grid>
    </Wrapper>
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
