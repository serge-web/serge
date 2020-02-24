import React, { Component } from 'react'
import Loader from './Loader'
import '@serge/themes/App.scss'

class AwaitingStart extends Component {
  render () {
    console.log(this.props.description)

    return (
      <Loader>
        <h1>Awaiting game start</h1>
        <p>{this.props.description}</p>
      </Loader>
    )
  }
}

export default AwaitingStart
