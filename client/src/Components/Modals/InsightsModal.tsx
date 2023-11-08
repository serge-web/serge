import InsightForm from '../local/molecules/insight-form'
import { MessageDetailsFrom } from 'src/custom-types'
import React from 'react'
import {
  closeModal, sendFeedbackMessage
} from '../../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { usePlayerUiDispatch, usePlayerUiState } from '../../Store/PlayerUi'
import ModalWrapper from './ModalWrapper'

import 'src/themes/App.scss'

const InsightsModal: React.FC = () => {
  const state = usePlayerUiState()
  const dispatch = usePlayerUiDispatch()
  const { selectedForce, currentTurn } = state
  if (selectedForce === undefined) throw new Error('selectedForce is undefined')
  if (!state.modalOpened) return <></>

  // TODO: Non defined types in @serge/Components/InsightForm
  // @ts-ignore
  const handleSend = ({ name, message }) => {
    const from: MessageDetailsFrom = {
      iconURL: '',
      force: selectedForce.name,
      forceId: selectedForce.uniqid,
      forceColor: selectedForce.color,
      roleId: state.selectedRole,
      roleName: state.selectedRoleName,
      name
    }

    sendFeedbackMessage(state.currentWargame, from, message, currentTurn)(dispatch)
  }

  const handleClose = () => {
    dispatch(closeModal())
  }

  return (
    <ModalWrapper onBackgroundClick={handleClose}>
      <InsightForm
        onCancel={handleClose}
        onSend={handleSend}
        darkMode
      />
    </ModalWrapper>
  )
}

export default InsightsModal
