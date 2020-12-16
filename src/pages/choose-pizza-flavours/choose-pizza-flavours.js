import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { CardLink, H4, HeaderContent, PizzasGrid, Divider } from 'ui'
import { singularOrPlural } from 'utils'
import { Redirect } from 'react-router-dom'
import { HOME } from 'routes'

import pizzasFlavours from 'contents/pizza-flavours'
import { Card, Grid, Typography } from '@material-ui/core'

const ChoosePizzaFlavours = ({ location }) => {
  const [checkboxes, setCheckboxes] = useState({})
  // console.log('checkboxes:', checkboxes)
  if (!location.state) {
    return <Redirect to={HOME} />
  }

  const { flavours, id: pizzaSizeID } = location.state

  // const handleChangeCheckbox = (pizzaFlavoursId) => (e) => {
  //   setCheckboxes((check) => {
  //     return {
  //       ...check,
  //       [pizzaFlavoursId]: e.target.checked
  //     }
  //   })
  // }

  const handleChangeCheckbox = (pizzaFlavoursId) => (e) => {
    console.log('checkboxes:', checkboxes)
    if (
      checkboxesChecked(checkboxes).length === flavours &&
      e.target.checked === true
    ) {
      return
    }

    setCheckboxes({
      ...checkboxes,
      [pizzaFlavoursId]: e.target.checked //!checkboxes[pizza.id] //
    })
  }

  return (
    <>
      <HeaderContent>
        <H4>
          Choose {flavours} {''}
          {singularOrPlural(flavours, 'flavour', 'flavours')}
        </H4>
      </HeaderContent>

      <PizzasGrid>
        {pizzasFlavours.map((pizza) => (
          <Grid item key={pizza.id} xs>
            <Card>
              <Label>
                <Img src={pizza.image} alt={pizza.name} />

                <Divider />

                <Typography>{pizza.name}</Typography>
                <Typography variant="h5">{pizza.value[pizzaSizeID]}</Typography>
                <input
                  type="checkbox"
                  checked={!!checkboxes[pizza.id]}
                  onChange={handleChangeCheckbox(pizza.id)}
                />
              </Label>
            </Card>
          </Grid>
        ))}
      </PizzasGrid>
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

const Label = styled(CardLink).attrs({
  component: 'label'
})``

const Img = styled.img`
  width: 200px;
`

export default ChoosePizzaFlavours
