import React, { Component } from "react";
import { connect } from "react-redux";
import UniversalRouter from "universal-router";
import {
  DEMO_ROUTE,
  ADMIN_ROUTE, CREATE_MESSAGE_ROUTE,
  CREATE_TEMPLATE_ROUTE, EDIT_MESSAGE_ROUTE,
  EDIT_TEMPLATE_ROUTE, EXPORT_ROUTE, EXPORT_MESSAGES_SUBROUTE, EXPORT_FORCES_SUBROUTE, EXPORT_PRINT_SUBROUTE, GAME_SETUP_ROUTE,
  MESSAGE_CREATOR_BASE_ROUTE, MESSAGE_LIBRARY_ROUTE, MESSAGE_TEMPLATE_ROUTE, WELCOME_SCREEN_EDIT_ROUTE,
} from "../../consts";
import GameDesignerInterface from "../../Views/GameDesignerInterface";
import MessageTemplates from "../../Views/MessageTemplates";
import MessageLibrary from "../../Views/MessageLibrary";
import EditMessage from "../../Views/EditMessage";
import CreateMessage from "../../Views/CreateMessage";
import EditTemplate from "../../Views/EditTemplate";
import CreateTemplate from "../../Views/CreateTemplate";
import GameSetup from "../../Views/GameSetup";
import ExportMessages from "../../Views/ExportMessages";
import ExportForces from "../../Views/ExportForces";
import ExportPrint from "../../Views/ExportPrint";
import EditWelcomeScreen from "../../Views/EditWelcomeScreen";
import ModalSwitchAdmin from "../Modals/ModalSwitch/ModalSwitchAdmin";
import { setCurrentViewFromURI } from "../../ActionsAndReducers/setCurrentViewFromURI/setCurrentViewURI_ActionCreators";

const routes = [
  { path: DEMO_ROUTE, action: () => <GameDesignerInterface/> },
  { path: ADMIN_ROUTE, action: () => <GameDesignerInterface/> },
  { path: MESSAGE_TEMPLATE_ROUTE, action: () => <MessageTemplates /> },
  { path: MESSAGE_LIBRARY_ROUTE, action: () => <MessageLibrary /> },
  { path: MESSAGE_CREATOR_BASE_ROUTE, children:
    [
      { path: CREATE_TEMPLATE_ROUTE, action: () => <CreateTemplate /> },
      { path: EDIT_TEMPLATE_ROUTE, action: () => <EditTemplate /> },
      { path: CREATE_MESSAGE_ROUTE, action: () => <CreateMessage /> },
      { path: EDIT_MESSAGE_ROUTE, action: () => <EditMessage /> },
    ]
  },
  { path: EXPORT_ROUTE, children:
    [
      { path: '', action: () => <ExportMessages /> },
      { path: EXPORT_MESSAGES_SUBROUTE, action: () => <ExportMessages /> },
      { path: EXPORT_FORCES_SUBROUTE, action: () => <ExportForces /> },
      { path: EXPORT_PRINT_SUBROUTE, action: () => <ExportPrint /> },
    ]
  },
  { path: GAME_SETUP_ROUTE, action: () => <GameSetup /> },
  { path: EXPORT_ROUTE, action: () => <ExportMessages /> },
  { path: WELCOME_SCREEN_EDIT_ROUTE, action: () => <EditWelcomeScreen /> },
];

class RouterDashboard extends Component {
  constructor(props) {
    super(props);
    let path = new URL(window.location.href).pathname;
    if( path === GAME_SETUP_ROUTE ) path = ADMIN_ROUTE;
    this.props.dispatch(setCurrentViewFromURI(path));
    this.router = new UniversalRouter(routes);
    this.state = {
      currentView: null,
    }
  }

  componentDidUpdate(prevProps) {
    const { currentViewURI } = this.props;
    if(prevProps.currentViewURI !== currentViewURI) {
      this.router.resolve({ pathname: currentViewURI }).then(result => {
        this.setState({
          currentView: result,
        });
      });
    }
  }

  render() {
    return (
      <>
        <ModalSwitchAdmin/>
        { this.state.currentView }
      </>
    );
  }
}

const mapStateToProps = ({ currentViewURI }) => ({
  currentViewURI
});

export default connect(mapStateToProps)(RouterDashboard);
