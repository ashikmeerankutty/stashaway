import React from 'react';
import ReactStars from 'react-stars'

const Restaurant = ({ restaurant }) => (<div className="restaurant">
  <div className="product-holder">
    <img src="https://images1.westword.com/imager/u/745xauto/11296949/ramen-20181203-lirette002.jpg" alt="restaurant"></img>
    <div>
      <h3>{restaurant.Variety}</h3>
      <p>Brand: {restaurant.Brand}</p>
      <p>Country: {restaurant.Country}</p>
      <ReactStars
        className="stars"
        count={5}
        value={restaurant.Stars}
        onChange={() => null}
        size={12}
        color2={'#ffd700'} />
    </div>
  </div>
</div>)

export default Restaurant;