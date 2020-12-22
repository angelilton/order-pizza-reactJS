import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import {
  CardLink,
  H4,
  HeaderContent,
  PizzasGrid,
  Divider,
  Wrapper,
  Footer
} from 'ui'
import { singularOrPlural, toEuro } from 'utils'
import { Redirect } from 'react-router-dom'
import { CHOOSE_QUANTITY, HOME } from 'routes'

import pizzasFlavours from 'contents/pizza-flavours'
import { Card as MaterialCard, Grid, Typography } from '@material-ui/core'

const ChoosePizzaFlavours = ({ location }) => {
  const [checkboxes, setCheckboxes] = useState(() => ({}))

  if (!location.state) {
    return <Redirect to={HOME} />
  }

  const { flavours, id: pizzaSizeId } = location.state.pizzaSize

  const handleChangeCheckbox = (pizzaId) => (e) => {
    if (
      checkboxesChecked(checkboxes).length === flavours &&
      e.target.checked === true
    ) {
      return
    }

    setCheckboxes((checkboxes) => {
      return {
        ...checkboxes,
        [pizzaId]: e.target.checked
      }
    })
  }
  console.log('checkBoxes', checkboxes)
  return (
    <>
      <Wrapper>
        <HeaderContent>
          <H4>
            Choose {flavours} {''}
            {singularOrPlural(flavours, 'flavour', 'flavours')}
          </H4>
        </HeaderContent>

        <PizzasGrid>
          {pizzasFlavours.map((pizza) => (
            <Grid item key={pizza.id} xs>
              <Card checked={!!checkboxes[pizza.id]}>
                <Label>
                  <Img src={pizza.image} alt={pizza.name} />

                  <Divider />

                  <Typography>{pizza.name}</Typography>
                  <Typography variant="h5">
                    {toEuro(pizza.value[pizzaSizeId])}
                  </Typography>
                  <input
                    style={{ display: 'none' }}
                    type="checkbox"
                    checked={!!checkboxes[pizza.id]}
                    onChange={handleChangeCheckbox(pizza.id)}
                  />
                </Label>
              </Card>
            </Grid>
          ))}
        </PizzasGrid>
      </Wrapper>

      <Footer
        buttons={{
          back: {
            children: 'Switch the size'
          },
          action: {
            to: {
              pathname: CHOOSE_QUANTITY,
              state: {
                ...location.state,
                pizzaFlavours: getFlavoursNameAndId(checkboxes)
              }
            },
            children: 'How many Pizza?',
            disabled: !checkboxesChecked(checkboxes).length
          }
        }}
      />
    </>
  )
}

ChoosePizzaFlavours.propTypes = {
  location: PropTypes.object.isRequired
}

function checkboxesChecked(checkboxes) {
  return Object.values(checkboxes).filter(Boolean)
  // filter((c) => (c === true))
}

function getFlavoursNameAndId(objChecked) {
  return Object.entries(objChecked)
    .filter(([id, value]) => Boolean(value))
    .map(([id]) => ({
      id,
      name: pizzasFlavours.find((flavour) => flavour.id === id).name
    }))
}

const Card = styled(MaterialCard)`
  border: 2px solid solid transparent;
  background: ${({ theme, checked }) =>
    checked ? theme.palette.success.light : ''};
`

const Label = styled(CardLink).attrs({
  component: 'label'
})``

const Img = styled.img`
  width: 200px;
`

export default ChoosePizzaFlavours
