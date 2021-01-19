import React, { Component } from "react";
import { AdminPanelFooter } from '@serge/components';
import { showHideObjectives } from "../ActionsAndReducers/playerUi/playerUi_ActionCreators";
import "@serge/themes/dependencies/flexlayout-react.scss";
import "@serge/themes/App.scss";

class AdminAndInsightsTabsContainer extends Component {



  showHideForceObjectives = () => {
    const [ , dispatch ] = this.context;
    dispatch(showHideObjectives());
  };


  render() {this.state.
    const [ state ] = this.context;
    const { byPassUrl } = this.state;
    let force = state.allForces.find((force) => force.uniqid === state.selectedForce);

    return (
      <>
        <AdminPanelFooter
          force={force}
          selectedRole={state.selectedRole}
          byPassUrl={byPassUrl}
          onIconClick={this.showHideForceObjectives}
        />
      </>
    );
  }
}

export default AdminAndInsightsTabsContainer;
