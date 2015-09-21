import { combineReducers } from 'redux'
import * as exampleReducer from './example'
import * as responsesReducer from './responses'

const rootReducer = combineReducers({
  ...responsesReducer
})

export default rootReducer
