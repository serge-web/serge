import React, {Component}  from 'react';
import { connect } from 'react-redux';
import { modalAction } from "../../ActionsAndReducers/Modal/Modal_ActionCreators";

class ModalWrapper extends Component {

  // constructor(props) {
  //   super(props);
  // }

  handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) this.props.dispatch(modalAction.close());
  };

  render() {
    const setSize = this.props.editable ? "modal setsize": 'modal';

    return (
      <div className="modal-bg" onClick={this.handleBackgroundClick}>
        <div className={setSize}>
          {this.props.children}
        </div>
      </div>
    )
  }
};

export default connect()(ModalWrapper);