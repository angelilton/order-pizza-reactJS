import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Header from './header'

import { HOME, CHOOSE_PIZZA_FLAVOURS } from 'routes'

const ChoosePizzaSize = React.lazy(() => import('pages/choose-pizza-size'))
const ChoosePizzaFlavours = React.lazy(() =>
  import('pages/choose-pizza-flavors')
)

const Main = () => (
  <>
    <Header />
    <Wrapper>
      <Suspense fallback="Loading...">
        <Switch>
          <Route path={HOME} exact component={ChoosePizzaSize} />
          <Route
            path={CHOOSE_PIZZA_FLAVOURS}
            exact
            component={ChoosePizzaFlavours}
          />
        </Switch>
      </Suspense>
    </Wrapper>
  </>
)

const Wrapper = styled.main`
  padding: 20px;
  margin-top: 80px;
`

export default Main
