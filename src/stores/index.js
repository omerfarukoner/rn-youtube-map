import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'

import { rootSaga } from './sagas/index'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, thunk))

sagaMiddleware.run(rootSaga)

export { store }
