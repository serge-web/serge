import { Component } from 'react'
import { connect } from 'react-redux'
import UniversalRouter from 'universal-router'
import { DEMO_ROUTE, ADMIN_ROUTE, CREATE_TEMPLATE_ROUTE, EXPORT_ROUTE, EXPORT_MESSAGES_SUBROUTE, EXPORT_FORCES_SUBROUTE, EXPORT_PRINT_SUBROUTE, GAME_SETUP_ROUTE, WELCOME_SCREEN_EDIT_ROUTE } from 'src/config'
import GameDesignerInterface from '../../Views/GameDesignerInterface'
import AdminGameSetup from '../../Views/GameSetupNew'
// import GameSetup from '../../Views/GameSetup'
import ExportMessages from '../../Views/ExportMessages/ExportMessages'
import 'src/themes/App.scss'
import ExportForces from '../../Views/ExportForces'
import ExportPrint from '../../Views/ExportPrint'
import EditWelcomeScreen from '../../Views/EditWelcomeScreen'
import ModalSwitchAdmin from '../Modals/ModalSwitch/ModalSwitchAdmin'
import { setCurrentViewFromURI } from '../../ActionsAndReducers/setCurrentViewFromURI/setCurrentViewURI_ActionCreators'

const routes = [
  { path: DEMO_ROUTE, action: () => <GameDesignerInterface/> },
  { path: ADMIN_ROUTE, action: () => <GameDesignerInterface/> },
  {
    path: EXPORT_ROUTE,
    children:
    [
      { path: '', action: () => <ExportMessages /> },
      { path: EXPORT_MESSAGES_SUBROUTE, action: () => <ExportMessages /> },
      { path: EXPORT_FORCES_SUBROUTE, action: () => <ExportForces /> },
      { path: EXPORT_PRINT_SUBROUTE, action: () => <ExportPrint /> }
    ]
  },
  { path: GAME_SETUP_ROUTE, action: () => <AdminGameSetup /> },
  { path: EXPORT_ROUTE, action: () => <ExportMessages /> },
  { path: WELCOME_SCREEN_EDIT_ROUTE, action: () => <EditWelcomeScreen /> }
]

class RouterDashboard extends Component {
  constructor (props) {
    super(props)
    let path = new URL(window.location.href).pathname
    if (path === GAME_SETUP_ROUTE) path = ADMIN_ROUTE
    this.props.dispatch(setCurrentViewFromURI(path))
    this.router = new UniversalRouter(routes)
    this.state = {
      currentView: null
    }
  }

  componentDidUpdate (prevProps) {
    const { currentViewURI } = this.props
    if (prevProps.currentViewURI !== currentViewURI) {
      this.router.resolve({ pathname: currentViewURI }).then(result => {
        this.setState({
          currentView: result
        })
      })
    }
  }
  
  // ModalSwitchAdmin -na anum delet switch admin page-um.
  render () {
    return (
      <>
        <ModalSwitchAdmin/>
        { this.state.currentView }
      </>
    )
  }
}

const mapStateToProps = ({ currentViewURI, dbLoading }) => ({
  currentViewURI,
  dbLoading
})

export default connect(mapStateToProps)(RouterDashboard)
