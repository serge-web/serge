import React, {Component} from "react";
import InsightsModal from "../InsightsModal";
import { PlayerStateContext } from "../../../Store/PlayerUi";

import "@serge/themes/App.scss";

class ModalSwitchPlayer extends Component {
  static contextType = PlayerStateContext;

  render() {
    const [ state ] = this.context;
    let modal;
    switch (state.modalOpened) {
      case "lessons":
        modal = <InsightsModal />;
        break;

      default:
        modal = false;
        break;
    }

    return (
      <>
        {modal}
      </>
    )
  }
}

export default ModalSwitchPlayer;
