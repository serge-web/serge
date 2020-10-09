import React, { Component } from "react";
import FlexLayout from "flexlayout-react";
import { AdminPanelFooter } from '@serge/components';
import GameAdmin from "./GameAdmin";
import InsightsChannel from "./InsightsChannel";
import { showHideObjectives } from "../ActionsAndReducers/playerUi/playerUi_ActionCreators";
import { PlayerStateContext } from "../Store/PlayerUi";
import "@serge/themes/dependencies/flexlayout-react.scss";
import "@serge/themes/App.scss";

const json = {
  global: {
    tabSetTabStripHeight: 45,
    tabEnableClose: false,
    tabEnableRenderOnDemand: false,
    tabEnableDrag: false,
  },
  borders: [],
  layout:{
    "type": "row",
    "weight": 100,
    "children": [
    ]
  }
};

class AdminAndInsightsTabsContainer extends Component {
  static contextType = PlayerStateContext;

  constructor(props) {
    super(props);
    this.state = {
      gameAdmin: 'Game Admin',
      gameAdminTitle: 'Social Media',
      insights: 'Insights',
      model: FlexLayout.Model.fromJson(json),
      channelNames: [],
      byPassUrl: null
    };
  }

  getByPassUrl() {
    const [ state ] = this.context
    const { currentWargame, allForces, selectedForce, selectedRole } = state
    const currentUrl = new URL(document.location.href)
    const force = allForces.find(force => force.uniqid === selectedForce)
    const role = force.roles.find(role => role.name === selectedRole)
    const byPassParams = {
      wargame: currentWargame,
      access: role.password
    }
    Object.keys(byPassParams).forEach(key => {
      currentUrl.searchParams.set(key, byPassParams[key])
    })
    this.setState({
      byPassUrl: currentUrl
    })
  }

  componentDidMount() {
    this.addTabs();
    this.getByPassUrl();
  }

  addTabs() {
    const [ state ] = this.context;
    this.state.model.doAction(
      FlexLayout.Actions.addNode({type: "tab", component: this.state.gameAdmin, name: this.state.gameAdminTitle, id: this.state.gameAdmin}, "#2", FlexLayout.DockLocation.CENTER, -1)
    );

    if (state.isInsightViewer) {
      this.state.model.doAction(
        FlexLayout.Actions.addNode({type: "tab", component: this.state.insights, name: this.state.insights, id: this.state.insights}, "#2", FlexLayout.DockLocation.CENTER, -1)
      );
    }
  }

  factory = (node) => {
    if (node.getName() === this.state.gameAdminTitle) {
      return <GameAdmin />
    }
    if (node.getName() === this.state.insights) {
      return <InsightsChannel />
    }
  };

  showHideForceObjectives = () => {
    const [ , dispatch ] = this.context;
    dispatch(showHideObjectives());
  };

  classNameMapper = (defaultClassName) => `${defaultClassName} ${defaultClassName}--undo-transparent`;

  render() {
    const [ state ] = this.context;
    const { byPassUrl } = this.state;
    let force = state.allForces.find((force) => force.uniqid === state.selectedForce);

    return (
      <>
        <FlexLayout.Layout
          model={this.state.model}
          factory={this.factory}
          classNameMapper={this.classNameMapper}
        />
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
