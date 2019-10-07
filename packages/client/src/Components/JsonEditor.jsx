import React, { Component } from 'react';

import { connect } from "react-redux";

import {
  updateMessage,
} from "../ActionsAndReducers/dbMessages/messages_ActionCreators";

import JSONEditor from '@json-editor/json-editor';
import '../scss/App.scss';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSave} from "@fortawesome/free-solid-svg-icons";


class JsonCreator extends Component {

  constructor(props) {
    super(props);

    this.editor = null;
    this.editorPreviewRef = React.createRef();

    this.state = {
      selectedSchema: ''
    };
  }


  componentWillUpdate(nextProps, nextState, nextContext) {

    if (this.editor && nextProps.umpireMenu.selectedSchemaID !== this.props.umpireMenu.selectedSchemaID) {
      this.editor.destroy();
      this.editor = null;
    }

    // check logic
    if (
      nextProps.messages.messagePreviewId.length > 0 ||
      nextProps.umpireMenu.selectedSchemaID.length > 0
      // nextProps.messages.messagePreviewId.length > 0 &&
      // nextProps.umpireMenu.selectedSchemaID.length > 0
    ) {

      if (this.editor) return;

      this.editor = new JSONEditor(this.editorPreviewRef.current, {
        schema: nextProps.messages.messagePreview.schema,
        theme: 'bootstrap4'
      });
    }

    if (nextProps.messages.messagePreview.details) {
      this.editor.setValue(nextProps.messages.messagePreview.details);
    }

    if (this.props.disabled && this.editor) {
      this.editor.disable();
    }
  }


  saveMessage = () => {
    this.props.dispatch(updateMessage(this.editor.getValue(), this.props.messages.messagePreviewId));
  };


  render() {
    return (
      <>
        <div className="button-wrap">
          {!this.props.disabled ? <span onClick={this.saveMessage} className="link"><FontAwesomeIcon icon={faSave} />Save Message</span> : null }
        </div>
          <div id="preview-editor" ref={this.editorPreviewRef}></div>
        <div className="button-wrap">
          {!this.props.disabled ? <span onClick={this.saveMessage} className="link"><FontAwesomeIcon icon={faSave} />Save Message</span> : null }
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ messages, messageTypes, selectedSchema, umpireMenu }) => ({
  messages,
  messageTypes,
  selectedSchema,
  umpireMenu
});

export default connect(mapStateToProps)(JsonCreator);
