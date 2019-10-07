import React, { Component } from "react";
import FlexLayout from "flexlayout-react";
import GameAdmin from "./GameAdmin";
import InsightsChannel from "./InsightsChannel";
import { showHideObjectives } from "../ActionsAndReducers/playerUi/playerUi_ActionCreators";
import { PlayerStateContext } from "../Store/PlayerUi";
import "../scss/dependencies/flexlayout-react.scss";
import "../scss/App.scss";

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
      insights: 'Insights',
      model: FlexLayout.Model.fromJson(json),
      channelNames: [],
    };
  }

  componentDidMount() {
    this.addTabs();
  }

  addTabs() {
    const [ state ] = this.context;
    this.state.model.doAction(
      FlexLayout.Actions.addNode({type: "tab", component: this.state.gameAdmin, name: this.state.gameAdmin, id: this.state.gameAdmin}, "#2", FlexLayout.DockLocation.CENTER, -1)
    );

    if (state.isInsightViewer) {
      this.state.model.doAction(
        FlexLayout.Actions.addNode({type: "tab", component: this.state.insights, name: this.state.insights, id: this.state.insights}, "#2", FlexLayout.DockLocation.CENTER, -1)
      );
    }
  }

  factory = (node) => {
    if (node.getName() === this.state.gameAdmin) {
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
    let force = state.allForces.find((force) => force.uniqid === state.selectedForce);

    return (
      <>
        <FlexLayout.Layout
          model={this.state.model}
          factory={this.factory}
          classNameMapper={this.classNameMapper}
        />
        <div className="role-info" style={{ backgroundColor: force.color, }} data-tour="second-step">
          <span className="role-type">{ state.selectedRole }</span>
          <div className="contain-force-skin">
            <div className="force-skin">
              <span className="force-type">{ force.name }</span>
              <img className="role-icon" src={force.icon} alt="" onClick={this.showHideForceObjectives} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AdminAndInsightsTabsContainer;
