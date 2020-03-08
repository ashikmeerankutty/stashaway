import React, { Component } from 'react';
import { connect } from "react-redux"
import { getRestaurants } from "../../actions/restaurants"
import Restaurant from './restaurant';
import SearchBar from './search';
import Header from './header';


class Home extends Component {

  componentDidMount() {
    this.props.getRestaurants();
  }

  render() {
    const { restaurants } = this.props;
    const { data } = restaurants;
    return (
      <div className="home">
        <Header />
        <SearchBar />
        <div className="restaurants">
          {data.map(restaurant => <Restaurant restaurant={restaurant} />)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurants
})
const mapDispatchToProps = dispatch => ({
  getRestaurants: () => {
    dispatch(getRestaurants())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);