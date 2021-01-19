import React, { useState, useEffect } from 'react'
import { Props } from './types.d'
import { Role } from '@serge/custom-types'

import PlayerUiLandingScreen from '../PlayerUiLandingScreen'
import PlayerUiLobby from '../PlayerUiLobby'
import GameChannelsWithTour from '../GameChannelsWithTour'
import LoaderScreen from '../../Components/LoaderScreen'
import PlayerUiInitiate from '../PlayerUiInitiate'


import checkPassword from './helpers/checkPassword'
import { umpireForceTemplate, expiredStorage } from '../../consts'
import {
  getWargame,
  initiateGame,
} from '../../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { usePlayerUiState, usePlayerUiDispatch } from '../../Store/PlayerUi'

const PlayerUi = ({ gameInfo, wargame, messageTypes, checkPasswordFail, loadData }: Props): React.ReactElement => {
  const [tourIsOpen, setTourIsOpen] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [screen, setScreen] = useState('landing')
  const {
    allForces,
    currentWargame,
    selectedForce,
    selectedRole,
    wargameTitle,
    wargameInitiated,
    isGameControl
  } = usePlayerUiState()

  const dispatch = usePlayerUiDispatch()

  useEffect(() => {
    loadData()
    // @ts-ignore
    window.channelTabsContainer = window.channelTabsContainer || {}
    if(selectedForce && selectedRole) {
      const storageTourIsOpen = expiredStorage.getItem(`${wargameTitle}-${selectedForce.uniqid}-${selectedRole}-tourDone`) !== 'done'
      if (storageTourIsOpen !== tourIsOpen) setTourIsOpen(storageTourIsOpen)
    }
  }, [])

  const byPassLogin = async () => {
    const { searchParams } = new URL(window.location.href)
    const _wargame = searchParams.get('wargame')
    const _access = searchParams.get('access')
    if (_wargame && _access) {
      const selectedWargame = wargame.wargameList.filter(game => game.name.match(_wargame))
      if (selectedWargame.length) {
        setLoggedIn(true)
        await getWargame(selectedWargame[0].name)(dispatch)
        handleCheckPassword(_access)
      }
    }
  }

  useEffect(() => {
    if (wargame.wargameList.length && !loggedIn)
      byPassLogin()
  }, [loggedIn, wargame.wargameList])


  const handleCheckPassword = (pass: string): void => {
    const check = checkPassword(pass, messageTypes, currentWargame, allForces, dispatch)
    if (check) setScreen('player')
    else checkPasswordFail()
  }


  if (screen === 'landing')
  return <PlayerUiLandingScreen
    gameInfo={gameInfo}
    enterSerge={() => { setScreen('lobby') }}
  />

  if (screen === 'lobby') {
    // TODO import type from PlayerUiLobby or move this function in to PlayerUiLobby
    const roleOptions = (): ({ name: string, roles: Role[] })[] => allForces.map(
      force => ({name: force.name, roles: force.roles})
    )

    return <PlayerUiLobby
      wargameList={wargame.wargameList}
      roleOptions={roleOptions()}
      checkPassword={handleCheckPassword}
    />
  }

  if (selectedForce) {

    if (wargameInitiated) {
      const setStorageKey = (): string => `${wargameTitle}-${selectedForce.uniqid}-${selectedRole}-tourDone`
      return <GameChannelsWithTour
        storageKey={setStorageKey()}
        tourIsOpen={tourIsOpen}
      />
    }

    if (selectedForce.uniqid === umpireForceTemplate.uniqid && isGameControl) {
      return <PlayerUiInitiate initiateGameplay={(): void => {
        initiateGame(currentWargame)(dispatch)
      }} />
    }
  }

  return <LoaderScreen />
}

export default PlayerUi
