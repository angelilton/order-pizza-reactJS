import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
import * as serviceWorker from './serviceWorker'

import ErrorBoundary from './error'

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>{(hasError) => <Root hasError={hasError} />}</ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
