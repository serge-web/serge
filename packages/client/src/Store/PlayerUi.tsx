import React, { createContext, useContext, useReducer, Dispatch } from 'react'
import { initialState, playerUiReducer } from '../ActionsAndReducers/playerUi/playerUi_Reducer'
import { PlayerUi, PlayerUiActionTypes } from '@serge/custom-types'

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
