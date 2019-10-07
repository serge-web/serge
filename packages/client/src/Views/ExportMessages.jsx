import React, { Component } from 'react';
import { connect } from "react-redux";
import flatten from 'flat';
import { createExportItem } from "../ActionsAndReducers/ExportItems/ExportItems_ActionsCreators";
import ExcelExport from '../Components/ExcelExport';
import ExportItem from '../Components/ExportItem';
import ExportView from "./ExportView";

class ExportMessages extends Component {

  createExportItem = () => {
    const infoTypeMessages = this.props.wargame.exportMessagelist.filter(({infoType, data}) => (
      infoType && data && data.channels && Array.isArray(data.channels.channels)
    ));

    let channelTitles = {};

    for(const { data } of infoTypeMessages) {
      for(const { uniqid, name } of data.channels.channels) {
        if(channelTitles[uniqid]) continue;
        channelTitles[uniqid] = name;
      }
    }

    this.props.savExportItem({
      wargame: this.props.wargame.currentWargame,
      data: this.exportDataGrouped(this.props.wargame.exportMessagelist, channelTitles),
    });
  }

  messageFilterByType = (type) => {
    return msg => msg.details && msg.details.messageType === type
  };

  exportDataGrouped(messages, channelTitles) {
    let data = [];
    let messageTypes = {};

    for(let message of messages) {
      if(message.details && message.details.messageType && !messageTypes[message.details.messageType]) {
        messageTypes[message.details.messageType] = true;

        const messagesFiltered = messages.filter(this.messageFilterByType(message.details.messageType));

        let fields = [];
        let rows = [];

        for(let msg of messagesFiltered) {

          if(msg.details && msg.details.channel && channelTitles[msg.details.channel]) {
            msg.details.channel = channelTitles[msg.details.channel];
          }

          const flatMsg = this.keysSimplyfy(flatten(msg));
          let row = Array(fields.length).fill("");

          for(let key of Object.keys(flatMsg)) {
            //check if fields/titles have no current key then add
            if(!fields.includes(key)) {
              fields.push(key);
            }
            //check position for field then add value to rigth position in row
            row[fields.indexOf(key)] = flatMsg[key];
          }

          rows.push(row);
        }

        data.push({
          title: message.details.messageType,
          items: [
            fields.map(field => (field.toUpperCase())),
            ...rows
          ]
        })
      }
    }

    return data;
  }

  keysSimplyfy(row) {
    let newRow = {};

    for(let key of Object.keys(row)) {
      let subkeys = key.split('.');
      let mainKey = subkeys[subkeys.length - 1];
      let newKey = [];

      if(!isNaN(mainKey)) {
        mainKey = "";
      }

      for (var i = 0; i < subkeys.length; i++) {
        if(!isNaN(subkeys[i])) {
          newKey.push(`${subkeys[i-1] || 'messages'}_${subkeys[i]}`);
        }
      }

      if(mainKey) {
        newKey.push(mainKey);
      }

      newRow[newKey.join(" ")] = row[key];
    }

    return newRow;
  }

  render() {
    return (
      <ExportView>
        <h2>Export messages</h2>
        <span className="link link--noIcon" onClick={this.createExportItem}>Create Export</span>
        <ul>
          {this.props.exportItems.map((item, key) => (
            <ExportItem item={item} key={key}>
              <ExcelExport exp={item} index={key}/>
            </ExportItem>
          ))}
        </ul>
      </ExportView>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  savExportItem: data => {
    dispatch(createExportItem({
      type: 'messages',
      title: `Export ${new Date().toISOString().slice(0, 19).replace('T', ' ')}`,
      ...data,
    }));
  }
});

const mapStateToProps = ({ wargame, exportItems }) => ({
  wargame, exportItems: exportItems.filter(item => item.type === 'messages')
});

export default connect(mapStateToProps, mapDispatchToProps)(ExportMessages);
