import { PlayerStateProvider } from '../Store/PlayerUi'
import ModalSwitchPlayer from '../Components/Modals/ModalSwitch/ModalSwitchPlayer'
import PlayerUi from './PlayerUi'

const PlayerUiWrapper = () => (
  <PlayerStateProvider>
    <ModalSwitchPlayer/>
    <PlayerUi/>
  </PlayerStateProvider>
)

export default PlayerUiWrapper
