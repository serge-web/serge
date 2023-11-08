import { Component } from 'react'
import RouterDashboard from './RouterDashboard'
import PlayerUiWrapper from '../../Views/PlayerUiWrapper'
import DemoScreen from '../../Views/DemoScreen'
import {
  ADMIN_ROUTE,
  PLAYERUI_ROUTE,
  DEMO_ROUTE,
  GAME_SETUP_ROUTE
} from 'src/config'

const components = {
  [ADMIN_ROUTE]: <RouterDashboard/>,
  [PLAYERUI_ROUTE]: <PlayerUiWrapper/>,
  [DEMO_ROUTE]: <DemoScreen/>
}

class RouterMain extends Component {
  constructor (props) {
    super(props)
    let path = new URL(window.location.href).pathname
    if (path === GAME_SETUP_ROUTE) path = ADMIN_ROUTE
    this.path = path
    this.state = {
      currentView: null
    }
  }

  componentDidMount () {
    this.setState({
      currentView: components[this.path] || components[PLAYERUI_ROUTE]
    })
  }

  render () {
    return (
      <>
        { this.state.currentView }
      </>
    )
  }
}

export default RouterMain
