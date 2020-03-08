import { combineReducers } from 'redux'
import restaurants from './restaurants'
import search from './search'

const rootReducer = combineReducers({
  restaurants,
  search,
})

export default rootReducer