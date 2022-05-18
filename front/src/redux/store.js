import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
const isDev = process.env.REACT_APP_TYPE === 'DEV' ? true : false
// redux-devtools-extension redux-logger redux-thunk redux react-redux
const store = createStore(
    rootReducer,
    isDev ? composeWithDevTools(applyMiddleware(logger, thunk)) : applyMiddleware(thunk)
)
export default store
