import React, { Component } from "react";
import { connect } from "react-redux";
import JSONEditor from '@json-editor/json-editor'
import { Button } from "@serge/components";
import { createMessage } from "../ActionsAndReducers/dbMessages/messages_ActionCreators";
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
  
  /*
  ** avoid loading of flatpickr load in Message template screen for admin
  */
  componentDidMount() {
    if (window.flatpickr) {
      window.flatpickr = undefined
    }
  }

  componentWillUpdate(nextProps, nextState, nextContext) {

    if (this.editor && nextProps.umpireMenu.selectedSchemaID !== this.props.umpireMenu.selectedSchemaID) {
      this.editor.destroy();
      this.editor = null;
    }

    if (
        nextProps.umpireMenu.selectedSchemaID.length > 0 &&
        nextProps.messageTypes &&
        nextProps.messageTypes.messages.length > 0
    ) {

      if (this.editor) return;

      this.editor = new JSONEditor(this.editorPreviewRef.current, {
        schema: nextProps.messageTypes.messages.find((mes) => mes._id === nextProps.umpireMenu.selectedSchemaID).details,
        theme: 'bootstrap4'
      });
    }

    if (
        nextProps.messages.messagePreviewId.length > 0 &&
        nextProps.messageTypes.messages.length > 0 &&
        !nextProps.disabled
    ) {

      const data = nextProps.messages.messages.find(function(mes) {
        return mes._id.toLowerCase().indexOf(nextProps.messages.messagePreviewId.toLowerCase()) > -1;
      });
      this.editor.setValue(data.details);
    }

    if (this.props.disabled && this.editor) {
      this.editor.disable();
    }
  }


  saveMessage = () => {
    let schema = this.props.messageTypes.messages.find((mes) => mes._id === this.props.umpireMenu.selectedSchemaID).details;

    this.props.dispatch(createMessage(this.editor.getValue(), {...schema, _id: this.props.umpireMenu.selectedSchemaID}));
  };


  render() {
    const SaveMessageButton = () => (
      this.editor ? (
        <div className="button-wrap">
          { !this.props.disabled ? <Button color="secondary" onClick={this.saveMessage} icon="save">Save Message</Button> : null }
        </div>
      ) : null
    );
    return (
      <>
        <SaveMessageButton />
        <div id="preview-editor" ref={this.editorPreviewRef} />
        <SaveMessageButton />
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
