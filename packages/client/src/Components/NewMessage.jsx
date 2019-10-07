import React, { Component } from "react";
import PropTypes from "prop-types";
import Collapsible from "react-collapsible";
import MessageCreator from "../Components/MessageCreator.jsx";
import DropdownInput from "../Components/Inputs/DropdownInput";
import "../scss/App.scss";

class NewMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSchema: null,
    };
  }

  componentDidMount() {
    if (this.props.templates.length === 1) {
      this.setState({
        selectedSchema: this.props.templates[0].details,
      })
    }
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (this.props.curChannel !== nextProps.curChannel) {
      this.setState({
        selectedSchema: null,
      })
    }
    if (nextProps.templates.length === 1) {
      this.setState({
        selectedSchema: nextProps.templates[0].details,
      })
    }
  }

  setTemplate = (val) => {
    this.setState({
      selectedSchema: JSON.parse(val),
    });
  };


  render() {
    const templates = this.props.templates.map((item) => ({value: JSON.stringify(item.details), option: item.title }));
    let classes = "new-message-creator wrap";
    if (this.props.orderableChannel) classes += " new-message-orderable";

    return (
      <div className={classes}>
        <Collapsible
          trigger={"New Message"}
          transitionTime={200}
          easing={'ease-in-out'}
        >
          {templates.length > 1 &&
            <DropdownInput
              updateStore={this.setTemplate}
              // data={this.state.dropdownValue}
              selectOptions={templates}
              placeholder="Select message"
              className="message-input"
            />
          }
          <MessageCreator
            schema={this.state.selectedSchema}
            curChannel={this.props.curChannel}
            privateMessage={this.props.privateMessage}
          />
        </Collapsible>
      </div>
    );
  }
}

NewMessage.propTypes = {
  templates: PropTypes.array.isRequired,
  curChannel: PropTypes.string.isRequired,
  privateMessage: PropTypes.bool.isRequired,
};

export default NewMessage;
