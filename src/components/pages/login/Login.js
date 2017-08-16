import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../../../actions/auth_actions'
import LoginForm from './LoginForm'
import './login.scss'


class Login extends Component {

  componentDidMount() {
    
  }
  

  onLogin = (values) => {
    this.props.login(values)
  }
  
  render() {
    return (
      <div className="container m-5">
        <div className="row justify-content-md-center">
          <div className="col-6">
            <h1>Login</h1>
            <hr/>
            <LoginForm onSubmit={this.onLogin} />
          </div>
        </div>
      </div>
    )
  }
}

const mapState = (state) => ({
  authenticated: state.session.authenticated
})

export default connect(mapState, { login })(Login)