import React from 'react'
import { Grid, Typography, Card } from '@material-ui/core'
import styled from 'styled-components'
import { useAuth, useCollection } from 'hooks'
import { CHOOSE_PIZZA_FLAVOURS } from 'routes'
import {
  HeaderContent,
  H3,
  H4,
  PizzasGrid,
  CardLink,
  Divider,
  Wrapper
} from 'ui'
import { singularOrPlural } from 'utils'

const ChoosePizzaSize = () => {
  const { userInfo } = useAuth()
  const pizzasSizes = useCollection('pizzasSizes')

  if (pizzasSizes.length === 0) {
    return 'loading...'
  }

  const showUserName = userInfo.user.displayName.split(' ')[0]

  return (
    <Wrapper>
      <HeaderContent>
        <H3>what do you what for today, {showUserName}</H3>
        <H4>Choose your pizza size:</H4>
      </HeaderContent>

      <PizzasGrid>
        {pizzasSizes.map((pizza) => (
          <Grid item key={pizza.id} xs>
            <Card>
              <CardLink
                to={{
                  pathname: CHOOSE_PIZZA_FLAVOURS,
                  state: {
                    pizzaSize: pizza
                  }
                }}
              >
                <Pizza>
                  <PizzaText>{pizza.size}cm</PizzaText>
                </Pizza>

                <Divider />

                <Typography variant="h5">{pizza.name}</Typography>
                <Typography>
                  {`${pizza.slices} slices, ${pizza.flavours}`}{' '}
                  {singularOrPlural(pizza.flavours, 'flavour', 'flavours')}
                </Typography>
              </CardLink>
            </Card>
          </Grid>
        ))}
      </PizzasGrid>
    </Wrapper>
  )
}

const Pizza = styled.div`
  align-items: center;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  display: flex;
  height: 200px;
  justify-content: center;
  position: relative;
  width: 200px;
  z-index: 1;

  &::before,
  &::after {
    background: #ccc;
    content: '';
    position: absolute;
    transform: rotate(45deg);
  }
  &::before {
    height: 1px;
    width: 160px;
  }
  &::after {
    height: 160px;
    width: 1px;
  }
`

const PizzaText = styled(Typography).attrs({
  variant: 'h5'
})`
  align-items: center;
  background: #fff;
  border-radius: 50%;
  display: flex;
  height: 80px;
  justify-content: center;
  position: relative;
  width: 80px;
  z-index: 1;
`

export default ChoosePizzaSize
