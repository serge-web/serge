import React, { Component } from "react";
import JSONEditor from "@json-editor/json-editor";
import { saveMessage } from "../ActionsAndReducers/playerUi/playerUi_ActionCreators";
import { usePlayerUiState } from "../Store/PlayerUi";

import "@serge/themes/App.scss";

class JsonCreator extends Component {

  constructor(props) {
    super(props);

    this.editor = null;
    this.editorPreviewRef = React.createRef();
    this.state = {
      selectedSchema: ''
    };
  }

  sendMessage = () => {
    const state = usePlayerUiState();
    let curForce = state.allForces.find((force) => force.uniqid === state.selectedForce);

    let messageDetails = {
      channel: state.chatChannel.name,
      from: {
        force: curForce.name,
        forceColor: state.forceColor,
        role: state.selectedRole,
        icon: curForce.icon,
      },
      messageType: this.props.schema.title,
      timestamp: new Date().toISOString(),
    };

    if (this.editor.getValue().content === "") return;

    saveMessage(state.currentWargame, messageDetails, this.editor.getValue())();
    this.setupEditor();
  };

  setupEditor() {
    if (this.editor) {
      this.editor.destroy();
      this.editor = null;
    }

    if (this.props.schema && this.props.schema.type) {
      if (this.editor) return;

      this.editor = new JSONEditor(this.editorPreviewRef.current, {
        schema: this.props.schema,
        theme: 'bootstrap4',
        disable_collapse: true,
        disable_edit_json: true,
        disable_properties: true,
      });
    }
  }

  componentDidMount() {
    this.setupEditor();
  }

  render() {
    return (
      <div className="media">
        <div className="media-body message-creator" ref={this.editorPreviewRef}></div>
        <div className="align-self-center">
          <button name="send" className="btn btn-action btn-action--complimentary" onClick={this.sendMessage}>
            <span className="sr-only">Send</span>
          </button>
        </div>
      </div>
    );
  }
}

export default JsonCreator;
