import { Route, Switch } from 'react-router-dom'
import React from 'react'

const routes = [
  { path: '/rota1', content: 'rota 1' },
  { path: '/rota2', content: 'rota 2' }
]
const Main = () => (
  <>
    <h1>Main</h1>
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          render={() => <h2>{route.content}</h2>}
        />
      ))}
    </Switch>
  </>
)

export default Main
