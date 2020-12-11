import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import Header from './header'

const ChoosePizzaSize = React.lazy(() => import('pages/choose-pizza-size'))

const Main = () => (
  <>
    <Header />
    <Wrapper>
      <Suspense fallback="Loading...">
        <Switch>
          <Route path="/" exact component={ChoosePizzaSize} />
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
