import React, { createContext, useReducer } from "react";
import { initialState, playerUiReducer } from "../ActionsAndReducers/playerUi/playerUi_Reducer";

export const PlayerStateContext = createContext();
export const PlayerStateProvider = ({ children }) => (
  <PlayerStateContext.Provider value={useReducer(playerUiReducer, initialState)}>
    { children }
  </PlayerStateContext.Provider>
);