import React from "react";
import { PlayerStateProvider } from "../Store/PlayerUi";
import ModalSwitchPlayer from "../Components/Modals/ModalSwitch/ModalSwitchPlayer";
import PlayerUi from "./PlayerUi";

export default () => (
  <PlayerStateProvider>
    <ModalSwitchPlayer/>
    <PlayerUi/>
  </PlayerStateProvider>
)