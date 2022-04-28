import React, { Component } from "react";
import { connect } from "react-redux";
import uniqid from "uniqid";
import _ from "lodash";
import { channelTemplate } from "../../consts";
import { SearchList, Button } from "@serge/components";
import checkUnique from "../../Helpers/checkUnique";
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
      this.props.dispatch(addNewChannel({ name: id, uniqid: id }));
      this.props.dispatch(setSelectedChannel({ name: id, uniqid: id }));

      let template = channelTemplate;
      template.name = id;
      template.uniqid = id;

      this.props.dispatch(saveChannel(this.props.wargame.currentWargame, template));
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

  filterChannels = (item, value) => {
    return item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
  };

  deleteChannel = ({ uniqid }) => {
    this.props.dispatch(modalAction.open("confirmDelete", {type: "channel", data: uniqid}));
  };

  duplicateChannel = ({ uniqid }) => {
    this.props.dispatch(duplicateChannel(this.props.wargame.currentWargame, uniqid));
  };

  updateChannelName = (channel) => {
    this.props.dispatch(setTabUnsaved());
    this.setState({
      newChannelName: channel
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
      this.props.dispatch(saveChannel(this.props.wargame.currentWargame, newChannelData));
    }

    if (this.state.newChannelName === null) {
      this.props.dispatch(saveChannel(this.props.wargame.currentWargame, newChannelData));
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
          <Button
            color="secondary"
            size="large"
            onClick={this.createChannel}
            data-qa-type="add"
          >
            Add channel
          </Button>
          <SearchList
            listData={this.state.channelList}
            setSelected={this.setSelected}
            placeholder="Search channels"
            activeRow={item => item.name === selectedChannel}
            rowLabel={item => item.name}
            rowFilter={this.filterChannels}
            onDuplicate={this.duplicateChannel}
            onDelete={this.deleteChannel}
          />
        </div>

        {selectedChannel ?
          <div className="flex-content--fill channelsTab">
            <div className="flex-content--row channel-actions">
              <TextInput
                name="channel-name"
                id="editable-title"
                updateStore={this.updateChannelName}
                options={{numInput: false}}
                data={channelName}
              />
              <div className="button-wrap-tab">
                <Button
                  color="secondary"
                  onClick={this.saveChannel}
                  data-qa-type="save"
                >
                  Save Channel
                </Button>
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
