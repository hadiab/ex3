import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import App from './components/App'
import { Provider } from 'react-redux'
import configureStore from './store'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()
const store = configureStore({}, history)

ReactDOM.render(
<Provider store={store}>
  <ConnectedRouter history={history}>
    <App />
  </ConnectedRouter>
</Provider>,
document.getElementById('root'))
registerServiceWorker()
