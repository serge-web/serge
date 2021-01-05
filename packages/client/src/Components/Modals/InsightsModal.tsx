import React from 'react'
import ModalWrapper from './ModalWrapper'
import { InsightForm } from '@serge/components'
import {
  sendFeedbackMessage,
  closeModal
} from '../../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { usePlayerUiState, usePlayerUiDispatch } from '../../Store/PlayerUi'

import '@serge/themes/App.scss'

const InsightsModal: React.FC = () => {

  const state = usePlayerUiState()
  const dispatch = usePlayerUiDispatch()
  if (!state.modalOpened) return <></>

  // TODO: Non defined types in @serge/components/InsightForm
  // @ts-ignore
  const handleSend = ({ name, message }) => {
    const force = state.allForces.find((force) => force.uniqid === state.selectedForce)
    if (force === undefined) throw Error('Selected Force not found')

    let from = {
      force: force.name,
      forceColor: state.forceColor,
      role: state.selectedRole,
      name
    }

    sendFeedbackMessage(state.currentWargame, from, message)(dispatch)
  }


  return (
    <ModalWrapper>
      <InsightForm
        onCancel={(): void => dispatch(closeModal())}
        onSend={handleSend}
        darkMode
      />
    </ModalWrapper>
  )
}

export default InsightsModal
