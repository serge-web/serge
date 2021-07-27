import React from 'react'
import { RfiStatusBoard } from '@serge/components'
import { usePlayerUiState } from '../Store/PlayerUi'
import { saveMessage } from '../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { MessageCustom } from '@serge/custom-types'

const RfiStatusBoardChannel = () => {

  const state = usePlayerUiState()
  const { selectedForce, selectedRole } = state
  const isUmpire = selectedForce && selectedForce.umpire
  if (selectedForce === undefined) throw new Error('selectedForce is undefined')

  const roles = selectedForce && selectedForce.roles.map(role => role.name) || []

  const handleChange = (nextMsg: MessageCustom): void => {
    saveMessage(state.currentWargame, nextMsg.details, nextMsg.message)()
  }

  return (
    <RfiStatusBoard
      rfiMessages={state.rfiMessages}
      roles={roles}
      channels={state.allChannels}
      isRFIManager={state.isRFIManager}
      isUmpire={!!isUmpire}
      onChange={handleChange}
      role={selectedRole}
    />
  )
}

export default RfiStatusBoardChannel
