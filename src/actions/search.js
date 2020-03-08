
import {
  SET_SELECTED_LOCATION,
} from './actionTypes'

const setSelectedLocation = (location) => ({
  type: SET_SELECTED_LOCATION,
  location
})

export const getSelectedLocation = (location) => (dispatch) => {
  dispatch(setSelectedLocation(location))
}