import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'

// Setup middleware
const middleware = [...getDefaultMiddleware()]

// Setup store
const store = configureStore({ reducer: rootReducer, middleware })

export default store