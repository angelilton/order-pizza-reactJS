import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Input as MaterialInput } from '@material-ui/core'
import { H4, HeaderContent, Wrapper, Footer } from 'ui'
import { Redirect } from 'react-router-dom'
import { HOME, CHECKOUT } from 'routes'

const ChooseQuantity = ({ location }) => {
  const [quantity, setQuantity] = useState(1)

  if (!location.state) {
    return <Redirect to={HOME} />
  }

  function handleInput(e) {
    const { value } = e.target
    if (value >= 1) {
      setQuantity(value)
    }
  }

  return (
    <>
      <Wrapper>
        <HeaderContent>
          <H4>With these flavours, How many pizzas would you like?</H4>
        </HeaderContent>

        <MainContent>
          <Input value={quantity} onChange={handleInput} autoFocus />
        </MainContent>
      </Wrapper>

      <Footer
        buttons={{
          back: {
            children: 'Mudar sabores'
          },
          action: {
            to: CHECKOUT,
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
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing(2)}px;
`

export default ChooseQuantity
