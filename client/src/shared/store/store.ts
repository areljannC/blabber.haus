import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
import rootReducer from './rootReducer'

// Setup middleware
const sagaMiddleware = createSagaMiddleware()
const middleware = [...getDefaultMiddleware(), sagaMiddleware]

// Setup store
const store = configureStore({ reducer: rootReducer, middleware })

// Run sagas
sagaMiddleware.run(rootSaga)

export default store