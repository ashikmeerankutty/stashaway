import { SET_RESTAURANTS, SET_SEARCH_RESTAURANTS } from '../actions/actionTypes'

const initialState = { data: [], countries:[] }

const restaurants = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESTAURANTS: return { ...state, data: action.restaurants, countries: action.countries }
    case SET_SEARCH_RESTAURANTS:  return { ...state, data: action.restaurants }
    default:
      return state
  }
}

export default restaurants