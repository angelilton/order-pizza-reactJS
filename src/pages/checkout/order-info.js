import React from 'react'
import { List, ListItem, Typography } from '@material-ui/core'
import { singularOrPlural } from 'utils'
import { useOrder } from 'hooks'

const OrderInfo = () => {
  const { order } = useOrder()

  return (
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
  )
}

export default OrderInfo
