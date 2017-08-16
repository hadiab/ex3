import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getHotels } from '../../../actions/hotel_actions'
import Spinner from 'react-spinkit'

class Hotel extends Component {

  componentWillMount() {
    this.props.getHotels()
  }

  renderLoading() {
    if(this.props.loading) {
      return <Spinner name="three-bounce" />
    }
  }

  renderHotelItem = (data) => (
    <div className="col-4" key={data.id}>
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{ data.name }</h4>
          <p className="card-text">{ data.location }, { data.address }</p>
          <a href="/" className="card-link">Edit</a>
        </div>  
      </div> 
    </div>
  )

  render() {
    return (
      <div>

        <h1>Hotels</h1>
        <hr/>

        <div className="row">
          { 
            this.props.hotels.map(data => {
              return this.renderHotelItem(data)
            })
          } 
        </div>
  
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    loading: state.hotels.loading,
    hotels: state.hotels.hotels
  }
}

export default connect(mapState, { getHotels })(Hotel)