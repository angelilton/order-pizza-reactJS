import React from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Grid,
  Typography,
  Button as MaterialButton
} from '@material-ui/core'
import styled from 'styled-components'
import { Link, withRouter } from 'react-router-dom'
import { singularOrPlural } from 'utils'
import { useAuth } from 'hooks'

const Footer = ({ buttons, history, location }) => {
  const { userInfo } = useAuth()

  const { pizzaSize, pizzaFlavours } = location.state
  const { flavours, name, slices } = pizzaSize

  let showUserName = userInfo.user.displayName.split(' ')[0]

  const handleBtnGoBack = (e) => {
    e.preventDefault()
    history.goBack()
  }

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
              {` - ( ${slices} slices ${flavours} `}
              {singularOrPlural(flavours, 'flavour', 'flavours')})
            </Typography>
            {pizzaFlavours && (
              <Typography>
                {singularOrPlural(
                  pizzaFlavours.length,
                  'Flavour: ',
                  'Flavours: '
                )}{' '}
                <b>{pizzaFlavours.map(({ name }) => name).join(', ')}</b>
              </Typography>
            )}
          </OrderWrapper>

          <ButtonWrapper>
            <Button component="a" {...buttons.back} onClick={handleBtnGoBack} />
            <Button component={Link} color="primary" {...buttons.action} />
          </ButtonWrapper>
        </Grid>
      </Container>
    </FooterWrapper>
  )
}

Footer.propTypes = {
  buttons: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}

const ButtonWrapper = styled(Grid).attrs({
  item: true
})`
  display: flex;
  align-items: center;
`

const Button = styled(MaterialButton).attrs({
  variant: 'contained'
})`
  cursor: pointer;
  margin-left: ${({ theme }) => theme.spacing(2)}px;
`

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
