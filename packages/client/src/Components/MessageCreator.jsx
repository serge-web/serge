import React, { Component } from "react";
import JSONEditor from "@json-editor/json-editor";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { saveMessage } from "../ActionsAndReducers/playerUi/playerUi_ActionCreators";
import { PlayerStateContext } from "../Store/PlayerUi";
import MessageSender from './MessageSender';

import "@serge/themes/App.scss";

class JsonCreator extends Component {
  static contextType = PlayerStateContext;

  constructor(props) {
    super(props);
    this.editor = null;
    this.editorPreviewRef = React.createRef();
    this.privateMessageRef = React.createRef();
    this.state = {
      selectedSchema: ''
    };
  }

  sendMessage = (draft, channels) => {
    if(!channels) channels = this.props.curChannel;
    const [ state ] = this.context;
    let curForce = state.allForces.find((force) => force.uniqid === state.selectedForce);
    let details = {
      channel: channels,
      draftMessage: draft,
      feedbacks: [],
      from: {
        force: curForce.name,
        forceColor: state.forceColor,
        role: state.selectedRole,
        icon: curForce.icon,
      },
      messageType: this.props.schema.title,
      timestamp: new Date().toISOString(),
    };

    if (this.props.privateMessage) {
      details.privateMessage = this.privateMessageRef.current.value;
      this.privateMessageRef.current.value = "";
    }

    if (this.editor.getValue().content === "") return;

    saveMessage(state.currentWargame, details, this.editor.getValue())();

    this.editor.destroy();
    this.editor = null;
    this.createEditor(this.props.schema);
  };

  componentWillReceiveProps(nextProps, nextContext) {
    if (
      this.props.schema &&
      this.props.schema.title !== nextProps.schema.title
    ) {
      this.editor.destroy();
      this.editor = null;
    }

    if (nextProps.schema && nextProps.schema.type) {
      if (this.editor) return;
      this.createEditor(nextProps.schema);
    }
  }

  createEditor(schema) {
    this.editor = new JSONEditor(this.editorPreviewRef.current, {
      schema,
      theme: 'bootstrap4',
      disable_collapse: true,
      disable_edit_json: true,
      disable_properties: true,
    });
  }

  render() {
    return (
      <>
        <div className="form-group message-creator" ref={this.editorPreviewRef}></div>
        {
          this.props.privateMessage && (
            <div className="flex-content form-group">
              <label htmlFor="" className="material-label" id="private-message-input-label"><FontAwesomeIcon size="2x" icon={faUserSecret}/>Private message</label>
              <textarea id="private-message-input" className="form-control" ref={this.privateMessageRef} />
            </div>
          )
        }
        <MessageSender
          messageType={this.props.schema}
          sendMessage={this.sendMessage}
          data={this.context}
          currentChannel={this.props.curChannel}
        />
      </>
    );
  }
}

export default JsonCreator;
