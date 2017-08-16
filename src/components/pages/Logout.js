import React, { Component } from 'react'
import { sessionService } from 'redux-react-session'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../actions/auth_actions' 

class Logout extends Component {

  componentDidMount() {
    const { history } = this.props
    sessionService.deleteSession()
    this.props.logout()
    history.push('/login')
  }

  render() { return null }
}

export default withRouter(connect(null, { logout })(Logout))