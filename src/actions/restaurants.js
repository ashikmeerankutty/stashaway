import axios from "axios"
import { SET_RESTAURANTS, SET_SEARCH_RESTAURANTS } from "./actionTypes"

export const setRestaurants = (restaurants,countries) => ({
  type: SET_RESTAURANTS,
  restaurants,
  countries,
})

export const setSearchRestaurants = (restaurants) => ({
  type: SET_SEARCH_RESTAURANTS,
  restaurants,
})


export const getRestaurants = () => {
 return async dispatch => {
   try{
     let response = await axios.get('http://starlord.hackerearth.com/TopRamen');
     let countries = response.data.map(restaurant => restaurant.Country);
     let uniqueCountries = [...new Set(countries)];
     dispatch(setRestaurants(response.data, uniqueCountries));
    }
   catch(e) {
     console.log(e)
   }
 } 
}

export const searchRestaurants = (search, country, year) => {
  return async dispatch => {
    try {
      let response = await axios.get('http://starlord.hackerearth.com/TopRamen');
      response.data.map(restaurant => {
        console.log(restaurant["Top Ten"].split(' ')[0])
      })
      let restaurantsList = []
      if(country !== '' && search !== '' && year !==''){
        restaurantsList = response.data.filter(restaurant => restaurant.Brand === search && restaurant.Country === country && restaurant["Top Ten"].split(' ')[0] === year);
      }
      else if(country !== '') {
        restaurantsList = response.data.filter(restaurant => restaurant.Country === country);
      }
      else if(search !== '') {
        restaurantsList = response.data.filter(restaurant => restaurant.Brand === search);
      }
      else {
        restaurantsList = response.data.filter(restaurant => restaurant["Top Ten"].split(' ')[0] === year);
      }
      console.log(restaurantsList)
      dispatch(setSearchRestaurants(restaurantsList));
     }
    catch(e) {
      console.log(e)
    }
  } 
 }
