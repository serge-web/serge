import React, {Component} from "react";
import InsightsModal from "../InsightsModal";
import { usePlayerUiState } from "../../../Store/PlayerUi";

import "@serge/themes/App.scss";

class ModalSwitchPlayer extends Component {
  render() {
    return null
    const state = usePlayerUiState();
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
