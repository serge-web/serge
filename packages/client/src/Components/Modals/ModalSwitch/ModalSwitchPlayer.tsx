import React from 'react'
import InsightsModal from '../InsightsModal'
import { usePlayerUiState } from '../../../Store/PlayerUi'

import '@serge/themes/App.scss'

const ModalSwitchPlayer: React.FC = () => {
  const { modalOpened } = usePlayerUiState()
  switch (modalOpened) {
    case 'lessons':
      return <InsightsModal />
    default:
      return <></>
  }
}

export default ModalSwitchPlayer
