import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import { Title as UiTitle, Wrapper } from 'ui'
import styled, { css } from 'styled-components'

const Checkout = () => {
  return (
    <Wrapper>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Title>what is your address for delivery?</Title>
          <PaperWrapper>Enderecos para entrega</PaperWrapper>

          <Title>what is your phone number?</Title>
          <PaperWrapper>numeros de telefone</PaperWrapper>
        </Grid>

        <Grid container direction="column" item xs={12} md={6}>
          <Title>Your order:</Title>
          <PaperWrapper>pedidos....</PaperWrapper>
        </Grid>
      </Grid>
    </Wrapper>
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
