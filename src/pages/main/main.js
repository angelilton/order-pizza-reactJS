import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './header'

import { HOME, CHOOSE_PIZZA_FLAVOURS, CHOOSE_QUANTITY } from 'routes'

const ChoosePizzaSize = React.lazy(() => import('pages/choose-pizza-size'))

const ChoosePizzaFlavours = React.lazy(() =>
  import('pages/choose-pizza-flavours')
)

const ChooseQuantity = React.lazy(() => import('pages/choose-pizza-quantity'))

const Main = () => (
  <>
    <Header />
    <Suspense fallback="Loading...">
      <Switch>
        <Route path={HOME} exact component={ChoosePizzaSize} />
        <Route path={CHOOSE_PIZZA_FLAVOURS} component={ChoosePizzaFlavours} />
        <Route path={CHOOSE_QUANTITY} component={ChooseQuantity} />
      </Switch>
    </Suspense>
  </>
)

export default Main
