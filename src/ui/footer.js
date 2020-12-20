import React from 'react'
import PropTypes from 'prop-types'
import { Container, Grid, Typography } from '@material-ui/core'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'
import { singularOrPlural } from 'utils'
import { useAuth } from 'hooks'

const Footer = ({ location }) => {
  const { userInfo } = useAuth()

  const { flavours, name, slices } = location.state
  let showUserName = userInfo.user.displayName.split(' ')[0]

  return (
    <FooterWrapper>
      <Container>
        <Grid container>
          <OrderWrapper>
            <Typography>
              <b>{showUserName}, your order is:</b>
            </Typography>
            <Typography>
              Pizza <b>{name.toUpperCase()}</b>
              {' - '}({slices} {singularOrPlural(slices, 'fatia', 'fatias')},{' '}
              {flavours} {singularOrPlural(flavours, 'sabor', 'sabores')})
            </Typography>
          </OrderWrapper>
          <Grid item>Botoes..</Grid>
        </Grid>
      </Container>
    </FooterWrapper>
  )
}

Footer.propTypes = {
  location: PropTypes.object.isRequired
}

const FooterWrapper = styled.footer`
  box-shadow: 0 0 3px ${({ theme }) => theme.palette.grey[400]};
  padding: ${({ theme }) => theme.spacing(3)}px;
  width: 100%;
`

const OrderWrapper = styled(Grid).attrs({
  item: true
})`
  flex-grow: 1;
`

export default withRouter(Footer)
