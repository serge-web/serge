import React, { createContext, useReducer, useMemo } from 'react'
import { initialState, playerUiReducer } from './reducers/player-ui'

// Create a context which will be provided to any childred
const PlayerStateContext = createContext<any>([{}, () => {}])

const PlayerStateProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(playerUiReducer, initialState);
    return (
       <PlayerStateContext.Provider value={useMemo(() => [state, dispatch], [state])}>
           { children }
       </PlayerStateContext.Provider>
    )
 }
 
export { PlayerStateContext, PlayerStateProvider }


