import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import PrivateRoute from './components/PrivateRoute'
import { withRouter } from 'react-router-dom'
import NotFound from './components/NotFound'
import { Home, AddHotel, Logout, Hotel, Login, Register } from './components/pages'

// build the router
const Routes = ({ authenticated, checked }) => (
  <div>
    { checked &&
      <Switch>
        <PrivateRoute exact path="/" component={Home} authenticated={authenticated} />
        <PrivateRoute path="/hotels" component={Hotel} authenticated={authenticated} />
        <PrivateRoute path="/vendor/add" component={AddHotel} authenticated={authenticated} />
        <Route path="/login" component={Login}/>
        <Route path="/logout" component={Logout}/>
        <Route path="/Register" component={Register}/>
        <Route component={NotFound}/>
      </Switch>
    }
  </div>
)

const mapState = ({ session }) => ({
  checked: session.checked,
  authenticated: session.authenticated
})

export default withRouter(connect(mapState)(Routes))

