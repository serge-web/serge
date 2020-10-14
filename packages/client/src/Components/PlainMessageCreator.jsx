import React, { Component } from "react";
import JSONEditor from "@json-editor/json-editor";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { saveMessage } from "../ActionsAndReducers/playerUi/playerUi_ActionCreators";
import { PlayerStateContext } from "../Store/PlayerUi";

import "@serge/themes/App.scss";

class PlainMessageCreator extends Component {
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

    sendMessage = () => {
        const [state] = this.context;
        let curForce = state.allForces.find((force) => force.uniqid === state.selectedForce);
        let details = {
            channel: this.props.curChannel,
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
    };

    render() {
        return (
            <div className="plainChatContainer">
                <textarea placeholder="type the text" className="form-control" />
                {
                    this.props.privateMessage && (
                        <div className="flex-content form-group">
                            <label htmlFor="" className="material-label" id="private-message-input-label"><FontAwesomeIcon size="2x" icon={faUserSecret} />Private message</label>
                            <textarea id="private-message-input" className="form-control" ref={this.privateMessageRef} />
                        </div>
                    )
                }
                <div className="form-group">
                    <button name="send" className="btn btn-action btn-action--form" onClick={this.sendMessage}>
                        <span>Send Message</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default PlainMessageCreator;
