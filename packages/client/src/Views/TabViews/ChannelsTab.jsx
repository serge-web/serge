import React, { Component } from "react";
import { connect } from "react-redux";
import uniqid from "uniqid";
import _ from "lodash";
import { channelTemplate } from "../../consts";
import checkUnique from "../../Helpers/checkUnique";
import TabsSearchList from "../../Components/TabsSearchList";
import TextInput from "../../Components/Inputs/TextInput";
import ChannelsTable from "../../Components/Layout/ChannelsTable";
import {
  setSelectedChannel,
  duplicateChannel,
  saveChannel,
  addNewChannel,
  setTabUnsaved,
  setTabSaved,
} from "../../ActionsAndReducers/dbWargames/wargames_ActionCreators";
import { addNotification } from "../../ActionsAndReducers/Notification/Notification_ActionCreators";
import { modalAction } from "../../ActionsAndReducers/Modal/Modal_ActionCreators";

import "@serge/themes/App.scss";

class ForcesTab extends Component {
  constructor(props) {
    super(props);
    console.log(JSON.stringify(this.props.wargame), 'chn');
    this.state = {
      channelList: this.props.wargame.data[this.props.wargame.currentTab].channels,
      searchQuery: '',
      newChannelName: null,
    }
  };


  componentWillReceiveProps(nextProps, nextContext) {
    const curSelected = this.props.wargame.data[this.props.wargame.currentTab].selectedChannel.uniqid;
    const nextSelected = nextProps.wargame.data[nextProps.wargame.currentTab].selectedChannel.uniqid;
    const curPropsState = this.props.wargame.data[this.props.wargame.currentTab].channels;
    const nextPropsState = nextProps.wargame.data[nextProps.wargame.currentTab].channels;

    if (curPropsState.length !== nextPropsState.length || curSelected !== nextSelected) {
      this.setState({
        channelList: nextProps.wargame.data[nextProps.wargame.currentTab].channels
      });
    }

    if (curSelected !== nextSelected) {
      this.setState({
        newChannelName: null,
      });
    }
  }

  createChannel = () => {
    const curTab = this.props.wargame.currentTab;

    if (this.props.wargame.data[curTab].dirty) {
      this.props.dispatch(modalAction.open("unsavedChannel", "create-new"));
    } else {
      let id = `channel-${uniqid.time()}`;
      this.props.dispatch(addNewChannel({name: id, uniqid: id}));
      this.props.dispatch(setSelectedChannel({name: id, uniqid: id}));

      let template = channelTemplate;
      template.name = id;
      template.uniqid = id;

      this.props.dispatch(saveChannel(this.props.wargame.currentWargame, id, template, id));
    }
  };

  setSelected = (channel) => {
    const curTab = this.props.wargame.currentTab;

    if (this.props.wargame.data[curTab].dirty) {
      this.props.dispatch(modalAction.open("unsavedChannel", channel));
    } else {
      this.props.dispatch(setTabSaved());
      this.props.dispatch(setSelectedChannel(channel));
    }
  };

  filterChannels = (input) => {
    let value = input.target.value;
    let list = this.props.wargame.data[this.props.wargame.currentTab].channels;

    this.setState({
      channelList: list.filter((item) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1),
      searchQuery: value
    });
  };

  deleteChannel = (uniqid) => {
    this.props.dispatch(modalAction.open("confirmDelete", {type: "channel", data: uniqid}));
  };

  duplicateChannel = (uniqid) => {
    this.props.dispatch(duplicateChannel(this.props.wargame.currentWargame, uniqid));
  };

  updateChannelName = (channel) => {
    this.props.dispatch(setTabUnsaved());
    this.setState({
      newChannelName: channel,
    })
  };

  checkUnique() {
    const curTab = this.props.wargame.currentTab;
    let selectedChannel = this.props.wargame.data[curTab].selectedChannel;
    let channelNames = this.props.wargame.data[curTab].channels.map((force) => force.name);
        channelNames = _.pull(channelNames, selectedChannel);

    if (!checkUnique(this.state.newChannelName, channelNames)) {
      this.props.dispatch(addNotification("Channel name is not unique.", "warning"));
      return false;
    }
    return true;
  }

  saveChannel = () => {
    const curTab = this.props.wargame.currentTab;
    let selectedChannel = this.props.wargame.data[curTab].selectedChannel.name;
    let newChannelData = this.props.wargame.data[curTab].channels.find((c) => c.name === selectedChannel);

    if (typeof this.state.newChannelName === 'string' && this.state.newChannelName.length > 0) {
      if (!this.checkUnique()) return;

      this.props.dispatch(setTabSaved());
      this.props.dispatch(saveChannel(this.props.wargame.currentWargame, this.state.newChannelName, newChannelData, selectedChannel));
    }

    if (this.state.newChannelName === null) {
      this.props.dispatch(saveChannel(this.props.wargame.currentWargame, selectedChannel, newChannelData, selectedChannel));
    } else if (this.state.newChannelName.length === 0) {
      alert('no channel name');
    }
  };


  render() {
    const curTab = this.props.wargame.currentTab;
    const selectedChannel = this.props.wargame.data[curTab].selectedChannel.name  || "";
    const channelName = typeof this.state.newChannelName === 'string' ? this.state.newChannelName : selectedChannel;

    return (
      <div className="flex-content-wrapper" id="game-setup-tab-channels">
        <div className="flex-content searchlist-wrap">
          <span className="link link--noIcon" onClick={this.createChannel} data-qa-type="add">Add channel</span>
          <TabsSearchList listData={this.state.channelList}
            filter={this.filterChannels}
            searchQuery={this.state.searchQuery}
            setSelected={this.setSelected}
            selected={selectedChannel}
            placeholder={"Search channels"}
            delete={this.deleteChannel}
            duplicate={this.duplicateChannel}
            name="channels"
          />
        </div>

        {selectedChannel ?
          <div className="flex-content--fill channelsTab">
            <div className="flex-content--row">
              <TextInput
                name="channel-name"
                id="editable-title"
                updateStore={this.updateChannelName}
                options={{numInput: false}}
                data={channelName}
              />
              <div className="button-wrap-tab">
                <span className="link link--noIcon" onClick={this.saveChannel} data-qa-type="save">Save Channel</span>
              </div>
            </div>
            <p className="heading--sml">Participants and messages</p>

            <ChannelsTable data={this.props.wargame.data[curTab].channels.find((f) => f.name === selectedChannel).participants} />
          </div>
        : null}

      </div>
    );
  }
}

// temp use allMessages
const mapStateToProps = ({ messages, wargame }) => ({
  messages,
  wargame,
});

export default connect(mapStateToProps)(ForcesTab);
