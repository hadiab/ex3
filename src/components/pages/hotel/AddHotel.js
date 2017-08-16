import React, { Component } from 'react'
import HotelForm from './HotelForm'
import { connect } from 'react-redux'
import { createHotel } from '../../../actions/hotel_actions'

class AddHotel extends Component {

  onCreateHotel = (values) => {
    console.log(values)
    this.props.createHotel(values)
  }

  render() {
    console.log(this.props)
    return (
      <div className="m-4 row justify-content-md-center">
        <div className="col-6">
          <HotelForm onSubmit={this.onCreateHotel} edit={this.props.isEditing} />
          <br/>
          { 
            this.props.error && <div className="alert alert-danger" role="alert">{this.props.errors}</div> 
          }
        </div>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    error: state.hotels.error,
    isEditing: state.hotels.isEditing,
  }
}

export default connect(mapState, { createHotel })(AddHotel) 