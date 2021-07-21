import React from 'react'
import ModalWrapper from './ModalWrapper'
import { InsightForm } from '@serge/components'
import {
  sendFeedbackMessage,
  closeModal
} from '../../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { usePlayerUiState, usePlayerUiDispatch } from '../../Store/PlayerUi'
import { MessageDetailsFrom } from '@serge/custom-types'

import '@serge/themes/App.scss'

const InsightsModal: React.FC = () => {

  const state = usePlayerUiState()
  const { selectedForce } = state
  if (selectedForce === undefined) throw new Error('selectedForce is undefined')
  const dispatch = usePlayerUiDispatch()
  if (!state.modalOpened) return <></>

  // TODO: Non defined types in @serge/components/InsightForm
  // @ts-ignore
  const handleSend = ({ name, message }) => {
    let from: MessageDetailsFrom = {
      iconURL: '',
      force: selectedForce.name,
      forceColor: selectedForce.color,
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
