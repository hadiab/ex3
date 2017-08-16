import React from 'react'
import Routes from '../routes'
import Header from './includes/Header'
import 'typeface-roboto'
import '../styles/main.scss'


const App = () => (
  <div className="App">
    <Header />
    <div className="container" style={{ marginTop: '20px' }}>
      <Routes />
    </div>
  </div>
)

export default App
