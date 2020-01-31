import React, {Component} from 'react';
import ModalWrapper from './ModalWrapper';
import { connect } from 'react-redux';
import { modalAction } from "../../ActionsAndReducers/Modal/Modal_ActionCreators";
import { deleteSelectedForce, deleteSelectedChannel } from "../../ActionsAndReducers/dbWargames/wargames_ActionCreators";


import "@serge/themes/App.scss";

class DeleteModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      action: this.props.currentModal.data
    }
  }

  hideModal = () => {
    this.props.dispatch(modalAction.close());
  };

  delete = () => {
    
    let curTab = this.props.wargame.currentTab;

    if (this.state.action.type === "force") {
      let isUmpire = this.props.wargame.data[curTab].forces.find((f) => f.uniqid === this.state.action.data).umpire;
      if (isUmpire) return;
      this.props.dispatch(deleteSelectedForce(this.props.wargame.currentWargame, this.state.action.data));
    }
    
    if (this.state.action.type === "channel") {
      this.props.dispatch(deleteSelectedChannel(this.props.wargame.currentWargame, this.state.action.data));
    }

    this.props.dispatch(modalAction.close());
  };

  render() {

    if (!this.props.currentModal.open) return false; // needed ?

    return (
      <ModalWrapper>
        <div className="display-text-wrapper">
          <h3>Delete</h3>
          <p>This action is permanent.<br/>Are you sure?</p>
          <div className="buttons">
            <button name="delete" className="btn btn-action btn-action--primary" onClick={this.delete}>Delete</button>
            <button name="cancel" className="btn btn-action btn-action--secondary" onClick={this.hideModal}>Cancel</button>
          </div>
        </div>
      </ModalWrapper>
    )
  }
}

const mapStateToProps = ({ currentModal, messages, umpireMenu, currentViewURI, wargame }) => ({
  currentModal,
  messages,
  umpireMenu,
  currentViewURI,
  wargame,
});

export default connect(mapStateToProps)(DeleteModal);
