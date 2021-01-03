import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  IconButton,
  List,
  ListItem as MListItem,
  Typography
} from '@material-ui/core'
import { Close } from '@material-ui/icons'

import { singularOrPlural } from 'utils'
import { useOrder } from 'hooks'
import { Redirect } from 'react-router-dom'
import { HOME } from 'routes'

const OrderInfo = ({ showOptions }) => {
  const { order, removePizzaFromOrder } = useOrder()

  if (!order.pizzas.length) {
    return <Redirect to={HOME} />
  }

  return (
    <List>
      {order.pizzas.map((pizza) => {
        const { pizzaFlavours, pizzaSize, quantity } = pizza

        return (
          <ListItem key={pizza.id}>
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
            {showOptions && (
              <IconButton
                title="Remove"
                color="secondary"
                onClick={() => removePizzaFromOrder(pizza.id)}
              >
                <Close />
              </IconButton>
            )}
          </ListItem>
        )
      })}
    </List>
  )
}

OrderInfo.propTypes = {
  showOptions: PropTypes.bool
}

const ListItem = styled(MListItem)`
  display: flex;
  justify-content: space-between;
`

export default OrderInfo
