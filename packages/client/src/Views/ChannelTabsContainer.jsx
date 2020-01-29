import React, { Component } from "react";
import FlexLayout from "flexlayout-react";
import Channel from "../Components/Channel";
import _ from "lodash";
import { expiredStorage, LOCAL_STORAGE_TIMEOUT } from "../consts";
import { getAllWargameMessages } from "../ActionsAndReducers/playerUi/playerUi_ActionCreators";
import { PlayerStateContext } from "../Store/PlayerUi";
import "@serge/themes/dependencies/flexlayout-react.scss";
import "@serge/themes/App.scss";
import Mapping from "../Components/Mapping"

const json = {
  global: {
    tabSetHeaderHeight: 0,
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

const imageTop = 14.194809302;
const imageLeft = 42.3558566271;
const imageRight = 43.7417816271;
const imageBottom = 12.401259302;

class ChannelTabsContainer extends Component {
  static contextType = PlayerStateContext;

  static findChannelByName = (channels, name) => {
    return Object.entries(channels).find(entry => {
      const [ , attrs ] = entry;
      return attrs.name === name
    });
  }

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
    const matchedChannel = ChannelTabsContainer.findChannelByName(state.channels, node.getName());
    if (node.getName().toLowerCase() === 'mapping') {
      return <Mapping currentTurn={state.currentTurn} role={state.selectedRole} currentWargame={state.currentWargame} selectedForce={state.selectedForce} allForces={state.allForces} allPlatforms={state.allPlatformTypes} phase={state.phase} channelID={node._attributes.id} imageTop={imageTop} imageBottom={imageBottom} imageLeft={imageLeft} imageRight={imageRight}></Mapping>
    }
    return matchedChannel && matchedChannel.length ? <Channel channel={matchedChannel[0]} /> : null
  };

  modelChanged = () => {
    expiredStorage.setItem(this.state.modelName, JSON.stringify(this.model.toJson()), LOCAL_STORAGE_TIMEOUT);
  };

  setActiveTab = (id) => {
    this.model.doAction(FlexLayout.Actions.selectTab(id));
  };

  tabRender = (node) => {
    let channel;
    const [ state ] = this.context;

    const setUnreadClassName = (className) => {
      if(node._attributes.className !== className) {
        node.getModel().doAction(FlexLayout.Actions.updateNodeAttributes(node.getId(), { className }));
      }
    };

    if (_.isEmpty(state.channels)) return;

    const matchedChannel = ChannelTabsContainer.findChannelByName(state.channels, node.getName());

    channel = matchedChannel && matchedChannel.length > 1 ? matchedChannel[1] : {};

    if (channel.unreadMessageCount === 0) {
      setUnreadClassName('');
    } else if (channel.unreadMessageCount < 9) {
      setUnreadClassName(`unread-${channel.unreadMessageCount}`);
    } else {
      setUnreadClassName(`unread-${channel.unreadMessageCount}plus`);
    }
  };

  render() {
    const [ state ] = this.context;
    let force = state.allForces.find((force) => force.uniqid === state.selectedForce);

    const channelsArray = Object.values(state.channels);
    const isOnlyMap = channelsArray.filter(channel => channel.name.toLowerCase() === "mapping").length === 1;

    if (channelsArray.length === 1 && isOnlyMap) {
      return <Mapping currentTurn={state.currentTurn} role={state.selectedRole} currentWargame={state.currentWargame} selectedForce={state.selectedForce} allForces={state.allForces} allPlatforms={state.allPlatformTypes} phase={state.phase} channelID={"map"} imageTop={imageTop} imageBottom={imageBottom} imageLeft={imageLeft} imageRight={imageRight}></Mapping>
    }

    if (channelsArray.length === 1 && !isOnlyMap) {
      return <Channel channel={channelsArray[0]} />;
    }

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
