import React, { createContext, useContext, useReducer, Dispatch } from 'react'
import { PlayerUi, PlayerUiActionTypes } from '@serge/custom-types'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid'
import { initialState, playerUiReducer } from '../ActionsAndReducers/playerUi/playerUi_Reducer'
import { saveForce, updateForces } from '../ActionsAndReducers/dbWargames/wargames_ActionCreators'

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
  let needUpdate = false
  const { currentWargame, allForces } = context
  allForces.forEach(force => {
    force.roles.forEach(role => {
      if (!role.roleId) {
        needUpdate = true
        role.roleId = uniqid.time('r')
      }
    })
  })
  if (needUpdate) {
    const dispatch = useDispatch()
    dispatch(updateForces(currentWargame, allForces))
  }
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
