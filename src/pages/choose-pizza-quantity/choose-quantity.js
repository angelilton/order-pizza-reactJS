import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Button, Input as MaterialInput } from '@material-ui/core'
import { H4, HeaderContent, Wrapper, Footer } from 'ui'
import { Link, Redirect } from 'react-router-dom'
import { HOME, CHECKOUT } from 'routes'
import { useOrder } from 'hooks'

const ChooseQuantity = ({ location }) => {
  const [quantity, setQuantity] = useState(1)
  const { addPizzaToOrder } = useOrder()

  if (!location.state) {
    return <Redirect to={HOME} />
  }

  function handleInput(e) {
    const { value } = e.target
    if (value >= 1) {
      setQuantity(value)
    }
  }

  function addPizza() {
    addPizzaToOrder({
      ...location.state,
      quantity: quantity
    })
  }

  return (
    <>
      <Wrapper>
        <HeaderContent>
          <H4>With these flavours, How many pizzas would you like?</H4>
        </HeaderContent>

        <MainContent>
          <Input value={quantity} onChange={handleInput} autoFocus />
          <ButtonAddPizza to={HOME} onClick={addPizza}>
            Add more pizza
          </ButtonAddPizza>
        </MainContent>
      </Wrapper>

      <Footer
        buttons={{
          back: {
            children: 'Mudar sabores'
          },
          action: {
            to: CHECKOUT,
            onClick: addPizza,
            children: 'checkout'
          }
        }}
      />
    </>
  )
}

ChooseQuantity.propTypes = {
  location: PropTypes.object.isRequired
}

const ButtonAddPizza = styled(Button).attrs({
  color: 'secondary',
  component: Link,
  variant: 'contained'
})`
  height: 70px;
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing(3)}px;
`

const Input = styled(MaterialInput).attrs({
  type: 'number'
})`
  & input {
    font-size: 80px;
    padding: 10px;
    text-align: center;
    width: 150px;
  }
`

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing(2)}px;
`

export default ChooseQuantity
