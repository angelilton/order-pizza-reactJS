import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './header'

import { HOME, CHOOSE_PIZZA_FLAVOURS } from 'routes'

const ChoosePizzaSize = React.lazy(() => import('pages/choose-pizza-size'))
const ChoosePizzaFlavours = React.lazy(() =>
  import('pages/choose-pizza-flavours')
)

const Main = () => (
  <>
    <Header />
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
  </>
)

export default Main
