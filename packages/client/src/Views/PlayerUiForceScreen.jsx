import React from 'react'
import { usePlayerUiState } from '../Store/PlayerUi'
import GameChannelsWithTour from './GameChannelsWithTour'
import PlayerUiInitiate from './PlayerUiInitiate'
import LoaderScreen from '../Components/LoaderScreen'

export default function PlayerUiForceScreen ({ storageKey, tourIsOpen, isUmpire, initiateGameplay }) {
  const state = usePlayerUiState()
  let render
  if (state.wargameInitiated) {
    render = <GameChannelsWithTour storageKey={storageKey.tourDone} tourIsOpen={tourIsOpen} />
  } else {
    render = isUmpire() ? <PlayerUiInitiate initiateGameplay={initiateGameplay} /> : <LoaderScreen />
  }
  return render
}
