import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = ({ authenticated }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
      <a className="navbar-brand" href="/">Snapgroup</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          { authenticated && <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li> }
          { authenticated && <li className="nav-item"><Link className="nav-link" to="/hotels">Hotels</Link></li> }
          { authenticated && <li className="nav-item"><Link className="nav-link" to="/vendor/add">Add Hotel</Link></li> }
          { !authenticated && <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li> }
          { !authenticated && <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li> }
          { authenticated && <li className="nav-item"><Link className="nav-link" to="/logout">Logout</Link></li> }
        </ul>
      </div>
    </div>
  </nav>
)

const mapState = (state) => ({
  authenticated: state.session.authenticated
})

export default connect(mapState)(Header)