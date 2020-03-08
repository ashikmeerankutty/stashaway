import {SET_SELECTED_LOCATION} from '../actions/actionTypes'

const initialState = {
  selectedLocation: '',
}

const search = (state = initialState, action) => {
  switch (action.type) {
  case SET_SELECTED_LOCATION:
    return {
      ...state,
      selectedLocation: action.location
    }
  default:
    return state
  }
}

export default search