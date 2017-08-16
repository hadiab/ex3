import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../../../actions/auth_actions'
import RegisterForm from './RegisterForm'
import './register.scss'

class Register extends Component {

  onRegister = (values) => {
    console.log(values)
  }

  render() {
    return (
      <div className="container m-5">
        <div className="row justify-content-md-center">
          <div className="col-6">
            <h1>Register</h1>
            <hr/>
            <RegisterForm onSubmit={this.onRegister} />
          </div>
        </div>
      </div>
    )
  }
}

export default Register