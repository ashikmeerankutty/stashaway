import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import onClickOutside from 'react-onclickoutside'
import { faMapMarkerAlt, faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { getSelectedLocation } from '../../actions/search'
import { connect } from 'react-redux'

class Location extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: [
        'Chennai',
        'Bangalore',
        'Delhi',
        'Hyderbad',
        'Kolkatta',
        'Mumbai',
        'Pune'
      ],
      listOpen: false
    }
  }

  handleClickOutside() {
    this.setState({ listOpen: false })
  }

  render() {
    const { listOpen } = this.state
    const { restaurants, search, setLocation } = this.props
    const { countries } = restaurants
    const { selectedLocation } = search
    return (
      <div className="location_wrapper">
        <div className="location_header">
          <div className="location_title" onClick={() => this.setState({ listOpen: true })}>
            {(!listOpen && selectedLocation.length === 0) ? (
              <div>
                <h2 className="location_title_text">COUNTRY</h2>
              </div>
            ) : (
                <div className="location_input_holder">
                  <h6 className="location_input_label">COUNTRY</h6>
                  <input type="text" className="location_input" autoFocus onChange={() => { }} value={selectedLocation} placeholder="Country" />
                </div>
              )}
            <div className="location_icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} color="#C6C6C6" />
            </div>
          </div>
        </div>
        {
          listOpen && (
            <div className="location_list">
              {countries.map((item) => (
                <div className="location_list_item" key={item} onClick={() => setLocation(item)}>
                  <div><p className="location_place">{item}</p></div>
                </div>
              ))}
            </div>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  search: state.search,
  restaurants: state.restaurants
})

const mapDispatchToProps = (dispatch) => ({
  setLocation: (location) => {
    dispatch(getSelectedLocation(location))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(onClickOutside(Location))