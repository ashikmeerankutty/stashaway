import React, { Component } from 'react'
import { connect } from "react-redux"
import Location from './location'
import { searchRestaurants } from "../../actions/restaurants"


class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state ={
      search : '',
      year: ''
    }
  }

  onSubmit = () => {
    const { search } = this.props
    this.props.searchRestaurants(this.state.search, search.selectedLocation, this.state.year)
  }

  render() {
    return (
      <div className="search_bar">
        <div className="location">
          <Location />
        </div>
        <div className="foods">
          <input className="food-search" onChange={(e) => this.setState({search: e.target.value})} placeholder="Search for Restaurants"></input>
        </div>
        <div className="date-picker">
          <input className="year-search" onChange={(e) => this.setState({year: e.target.value})} placeholder="Year"></input>
        </div>
        <div className="search_button" onClick={this.onSubmit}>
          <h2>FIND RESTAUARANTS</h2>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  search: state.search,
})
const mapDispatchToProps = dispatch => ({
  searchRestaurants: (search, country, year) => {
    dispatch(searchRestaurants(search, country, year))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);