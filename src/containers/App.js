import React, { Component } from 'react'
import { Link } from 'react-router'
//import logo from '../img/logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Open City Project</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/containers/App.js</code> and save to reload.
        </p>
        <p>
          Need to add pagination - react-router
        </p>
        <p>
          {'Try clicking: '}<Link to={'/firstpage'}>First Page</Link>
        </p>
        <p>
          {'Non existant page'}<Link to={'/secondpage'}>Second Page</Link>
        </p>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App
