import React from 'react'
import { RfiStatusBoard } from '@serge/components'
import { usePlayerUiState, usePlayerUiDispatch } from '../Store/PlayerUi'
import { UMPIRE_FORCE } from '../consts'

const RfiStatusBoardChannel = () => {

  const state = usePlayerUiState()
  const { selectedForce } = state
  const isUmpire = selectedForce && selectedForce.uniqid === UMPIRE_FORCE
  if (selectedForce === undefined) throw new Error('selectedForce is undefined')

  const roles = state.selectedForce && state.selectedForce.roles.map(role => role.name) || []

  return (
    <RfiStatusBoard
      rfiMessages={state.rfiMessages}
      roles={roles}
      channels={state.allChannels}
      isRFIManager={state.isRFIManager}
      isUmpire={isUmpire}
    />
  )
}

export default RfiStatusBoardChannel
