import React, { createContext, useContext, useReducer, Dispatch } from 'react'
import { initialState, playerUiReducer } from '../ActionsAndReducers/playerUi/playerUi_Reducer'
import { PlayerUi, PlayerUiActionTypes } from '@serge/custom-types'
import { saveForce } from '../ActionsAndReducers/dbWargames/wargames_ActionCreators'
import { useDispatch } from 'react-redux'

export const PlayerStateContext: React.Context<PlayerUi> = createContext(initialState)
export const PlayerDispatchContext: React.Context<Dispatch<PlayerUiActionTypes>> = createContext({} as Dispatch<PlayerUiActionTypes>)

export const PlayerStateProvider = ({ children }: { children: React.ReactNode }): React.ReactNode => {
  const [state, dispatch] = useReducer(playerUiReducer, initialState)
  return (
    <PlayerStateContext.Provider value={state}>
      <PlayerDispatchContext.Provider value={dispatch}>
        { children }
      </PlayerDispatchContext.Provider>
    </PlayerStateContext.Provider>
  )
}

export const usePlayerUiState = (): PlayerUi => {
  const context = useContext(PlayerStateContext)
  if (context === undefined) {
    throw new Error('usePlayerUiState must be used within a PlayerStateContext.Provider')
  }
  //process roleid for the legacy data
  const { currentWargame, allForces } = context
  allForces.forEach(force => {
    let needUpdate = false
    force.roles.forEach(role => {
      if (!role.roleId) {
        needUpdate = true
        role.roleId = 'r' + Math.random().toString(36).substring(4)
      }
    })
    if (needUpdate) {
      useDispatch()(saveForce(currentWargame, force.name, force, force.name, true))
    }
  })
  return context
}

export const usePlayerUiDispatch = (): Dispatch<PlayerUiActionTypes> => {
  const context = useContext(PlayerDispatchContext)
  const empty_context = {}
  if (context === undefined || context === empty_context) {
    throw new Error('usePlayerUiDispatch must be used within a PlayerDispatchContext.Provider')
  }
  return context
}
