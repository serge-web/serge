import React, { Component } from "react";
import FlexLayout from "flexlayout-react";
import Channel from "../Components/Channel";
import _ from "lodash";
import { expiredStorage, LOCAL_STORAGE_TIMEOUT } from "../consts";
import { getAllWargameMessages } from "../ActionsAndReducers/playerUi/playerUi_ActionCreators";
import { PlayerStateContext } from "../Store/PlayerUi";
import "../scss/dependencies/flexlayout-react.scss";
import "../scss/App.scss";

const json = {
  global: {
    tabSetTabStripHeight: 45,
    tabEnableClose: false,
    tabEnableRenderOnDemand: false,
  },
  borders: [],
  layout:{
    "type": "row",
    "weight": 100,
    "children": [
    ]
  }
};

class ChannelTabsContainer extends Component {
  static contextType = PlayerStateContext;

  constructor(props, context) {
    super(props);
    const [ state, dispatch ] = context;
    let modelName = `FlexLayout-model-${state.currentWargame}-${state.selectedForce}-${state.selectedRole}`;
    let model = expiredStorage.getItem(modelName);
    this.model = model ? FlexLayout.Model.fromJson(JSON.parse(model)) : FlexLayout.Model.fromJson(json);
    this.state = {
      modelName,
    };
    getAllWargameMessages(state.currentWargame)(dispatch);
  }

  componentDidUpdate() {
    this.computeTabs();
  }

  computeTabs() {
    const [ state ] = this.context;
    let channels = state.channels;
    let channelNames = [];

    for (let channelId in channels) {
      channelNames.push({id: channelId, name: channels[channelId].name});
    }

    let modelTabs = Object.values(this.model._idMap)
        .filter((node) => node._attributes.type === "tab")
        .map((node) => ({ id: node._attributes.id, name: node._attributes.name }));
    let newChannels = _.differenceBy(channelNames, modelTabs, (channel) => channel.id);
    let channelsToRemove = _.differenceBy(modelTabs, channelNames, (channel) => channel.id);
    let matchingChannels = _.intersectionBy(channelNames, modelTabs, (item) => item.id);
    let channelsToRename = _.differenceBy(matchingChannels, modelTabs, (item) => item.name);

    if (channelsToRename.length > 0) {
      this.renameTabs(channelsToRename);
    }

    if (newChannels.length > 0) {
      this.addToTabs(newChannels);
    }

    if (channelsToRemove.length > 0) {
      this.removeFromTabs(channelsToRemove);
    }
  }

  addToTabs(newChannels) {
    let modelTabs = Object.values(this.model._idMap);
    let tabsetMatch = modelTabs.find((tab) => tab._attributes.type === "tabset");
    let tabsetId = tabsetMatch._attributes.id;
    newChannels.forEach((channel) => {
      if (!this.model._idMap[channel.id]) {
        this.model.doAction(
          FlexLayout.Actions.addNode({type: "tab", component: channel.name, name: channel.name, id: channel.id}, tabsetId, FlexLayout.DockLocation.CENTER, -1)
        );
      }
    });
  }

  removeFromTabs(channelsToRemove) {
    channelsToRemove.forEach((channel) => {
      if (this.model._idMap[channel.id]) {
        this.model.doAction(
          FlexLayout.Actions.deleteTab(channel.id)
        );
      }
    });

    let modelTabs = Object.values(this.model._idMap)
      .filter((node) => node._attributes.type === "tab")
      .map((node) => ({ id: node._attributes.id, name: node._attributes.name }));

    if (modelTabs.length === 0) {
      this.addToTabs([{id: "default", name: "No subscriptions"}]);
    }
  }

  renameTabs(nameChanges) {
    nameChanges.forEach((channel) => {
      this.model.doAction(
        FlexLayout.Actions.updateNodeAttributes(channel.id, {name: channel.name})
      )
    })
  }

  factory = (node) => {
    const [ state ] = this.context;
    if (_.isEmpty(state.channels)) return;
    let curChannelEntry = Object.entries(state.channels).find((entry) => entry[1].name === node.getName());
    return <Channel channel={curChannelEntry[0]} />
  };

  modelChanged = () => {
    expiredStorage.setItem(this.state.modelName, JSON.stringify(this.model.toJson()), LOCAL_STORAGE_TIMEOUT);
  };

  setActiveTab = (id) => {
    this.model.doAction(FlexLayout.Actions.selectTab(id));
  };

  tabRender = (node) => {
    const [ state ] = this.context;
    if (_.isEmpty(state.channels)) return;

    let channel = Object.entries(state.channels).find((entry) => entry[1].name === node.getName())[1];

    if (node._attributes.className !== "" && channel.unreadMessageCount === 0) {
      node.getModel().doAction(FlexLayout.Actions.updateNodeAttributes(node.getId(), {className: ""}));
    }
    if (node._attributes.className !== "unread-1" && channel.unreadMessageCount === 1) {
      node.getModel().doAction(FlexLayout.Actions.updateNodeAttributes(node.getId(), {className: "unread-1"}));
    }
    if (node._attributes.className !== "unread-2" && channel.unreadMessageCount === 2) {
      node.getModel().doAction(FlexLayout.Actions.updateNodeAttributes(node.getId(), {className: "unread-2"}));
    }
    if (node._attributes.className !== "unread-3" && channel.unreadMessageCount === 3) {
      node.getModel().doAction(FlexLayout.Actions.updateNodeAttributes(node.getId(), {className: "unread-3"}));
    }
    if (node._attributes.className !== "unread-4" && channel.unreadMessageCount === 4) {
      node.getModel().doAction(FlexLayout.Actions.updateNodeAttributes(node.getId(), {className: "unread-4"}));
    }
    if (node._attributes.className !== "unread-5" && channel.unreadMessageCount === 5) {
      node.getModel().doAction(FlexLayout.Actions.updateNodeAttributes(node.getId(), {className: "unread-5"}));
    }
    if (node._attributes.className !== "unread-6" && channel.unreadMessageCount === 6) {
      node.getModel().doAction(FlexLayout.Actions.updateNodeAttributes(node.getId(), {className: "unread-6"}));
    }
    if (node._attributes.className !== "unread-7" && channel.unreadMessageCount === 7) {
      node.getModel().doAction(FlexLayout.Actions.updateNodeAttributes(node.getId(), {className: "unread-7"}));
    }
    if (node._attributes.className !== "unread-8" && channel.unreadMessageCount === 8) {
      node.getModel().doAction(FlexLayout.Actions.updateNodeAttributes(node.getId(), {className: "unread-8"}));
    }
    if (node._attributes.className !== "unread-9plus" && channel.unreadMessageCount >= 9) {
      node.getModel().doAction(FlexLayout.Actions.updateNodeAttributes(node.getId(), {className: "unread-9plus"}));
    }
  };

  render() {
    const [ state ] = this.context;
    let force = state.allForces.find((force) => force.uniqid === state.selectedForce);

    return (
      <div className="contain-channel-tabs" data-force={force.uniqid}>
        <FlexLayout.Layout
          model={this.model}
          factory={this.factory}
          onRenderTab={this.tabRender}
          onModelChange={this.modelChanged}
        />
      </div>
    );
  }
}

export default ChannelTabsContainer;
