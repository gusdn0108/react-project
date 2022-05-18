//리두서

import { combineReducers } from 'redux'
import authReducer from './auth/Reducer'

const rootReducer = combineReducers({
    auth: authReducer,
})
export default rootReducer