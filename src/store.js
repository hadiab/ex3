import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import freeze from 'redux-freeze'
import { sessionService } from 'redux-react-session'
import { createLogger } from 'redux-logger'
import { reducers } from './reducers/index'
import { sagas } from './sagas/index'

export default function configureStore (initialState = {}, history) {

  // add the middlewares
  let middlewares = []

  // create logger & pass options
  const logger = createLogger({
    collapsed: true
  })

  // add the router middleware
  middlewares.push(routerMiddleware(history))

  // add the saga middleware
  const sagaMiddleware = createSagaMiddleware()
  middlewares.push(sagaMiddleware)

  // add the freeze and logger dev middleware
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(freeze)
    middlewares.push(logger)
  }

  // apply the middleware
  let middleware = applyMiddleware(...middlewares)

  // add the redux dev tools
  if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
    middleware = compose(middleware, window.devToolsExtension())
  }

  // create the store
  const store = createStore(reducers, middleware)

  // Initialize session service
  const options = { redirectPath: '/login', driver: 'COOKIES' }
  sessionService.initSessionService(store, options)


  // start the sagas
  sagaMiddleware.run(sagas)

  return store

}
