import React from 'react'
import { RfiStatusBoard } from '@serge/components'
import { usePlayerUiState } from '../Store/PlayerUi'
import { saveMessage } from '../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { ForceRole, MessageCustom } from '@serge/custom-types'

const RfiStatusBoardChannel = () => {

  const state = usePlayerUiState()
  const { selectedForce, selectedRoleName, selectedRole } = state
  if (selectedForce === undefined) throw new Error('selectedForce is undefined')
  const isUmpire = selectedForce.umpire

  const roles = selectedForce.roles.map(role => role.name) || []

  const role: ForceRole = {
    forceId: selectedForce.uniqid,
    forceName: selectedForce.name,
    roleId: selectedRole,
    roleName: selectedRoleName
  }

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
      role={role}
    />
  )
}

export default RfiStatusBoardChannel
