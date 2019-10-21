import React from 'react'
import { useStateValue } from '../Store/PlayerUi'
import GameChannelsWithTour from './GameChannelsWithTour'
import PlayerUiInitiate from './PlayerUiInitiate'
import LoaderScreen from '../Components/LoaderScreen'

export default function PlayerUiForceScreen ({ storageKey, tourIsOpen, isUmpire, initiateGameplay }) {
  const [state] = useStateValue()
  let render
  if (state.wargameInitiated) {
    render = <GameChannelsWithTour storageKey={storageKey.tourDone} tourIsOpen={tourIsOpen} />
  } else {
    render = isUmpire() ? <PlayerUiInitiate initiateGameplay={initiateGameplay} /> : <LoaderScreen />
  }
  return render
}
