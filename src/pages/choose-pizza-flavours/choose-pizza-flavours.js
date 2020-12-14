import React from 'react'
import PropTypes from 'prop-types'

import { H4, HeaderContent } from 'ui'
import { singularOrPlural } from 'utils'
import { Redirect } from 'react-router-dom'
import { HOME } from 'routes'

const ChoosePizzaFlavours = ({ location }) => {
  {
    console.table(location)
  }

  if (!location.state) {
    return <Redirect to={HOME} />
  }

  const { flavours } = location.state

  return (
    <HeaderContent>
      <H4>
        Choose until {flavours} {''}
        {singularOrPlural(flavours, 'flavour', 'flavours')}
      </H4>
    </HeaderContent>
  )
}

ChoosePizzaFlavours.propTypes = {
  location: PropTypes.object.isRequired
}

export default ChoosePizzaFlavours
