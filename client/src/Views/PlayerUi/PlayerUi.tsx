/* eslint-disable no-unused-vars */
import { hiddenPrefix } from 'src/config'
import { WargameList } from 'src/custom-types'
import React, { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux'
import {
  getWargame
} from '../../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import LoaderScreen from '../../Components/LoaderScreen'
import { usePlayerUiDispatch, usePlayerUiState } from '../../Store/PlayerUi'
import GameChannelsWithTour from '../GameChannelsWithTour'
import PlayerUiLandingScreen from '../PlayerUiLandingScreen'
import PlayerUiLobby from '../PlayerUiLobby'
import checkPassword from './helpers/checkPassword'
import { Props } from './types.d'

enum Room {
  landing,
  lobby,
  player
}

const PlayerUi = ({ gameInfo, wargame, messageTypes, checkPasswordFail, wargameIsInvalid, loadData }: Props): React.ReactElement => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [waitingLoginPassword, setWaitingLoginPassword] = useState('')
  const [screen, setScreen] = useState<Room>(Room.landing)
  const {
    allForces,
    currentWargame,
    selectedForce,
    selectedRole,
    currentTurn
  } = usePlayerUiState()

  // const dispatch = useDispatch()
  const playerUiDispatch = usePlayerUiDispatch()

  useEffect(() => {
    loadData()
    window.channelTabsContainer = window.channelTabsContainer || {}
  }, [])

  useEffect(() => {
    if (selectedForce && selectedRole) {
      // @ts-ignore
      window.selectedChannel = selectedForce.uniqid
    }
  }, [selectedForce, selectedRole])

  useEffect(() => {
    if (waitingLoginPassword && loggedIn && allForces.length > 0) {
      handleCheckPassword(waitingLoginPassword)
      setWaitingLoginPassword('')
    }
  }, [waitingLoginPassword, allForces, loggedIn])

  const byPassLogin = async () => {
    const { searchParams } = new URL(window.location.href)
    const _wargame = searchParams.get('wargame')
    const _access = searchParams.get('access')
    if (_wargame && _access) {
      const selectedWargame: WargameList | undefined = wargame.wargameList.find(game => !!game.name.match(_wargame))
      if (selectedWargame) {
        setLoggedIn(true)
        setWaitingLoginPassword(_access)
        await getWargame(selectedWargame.name)(playerUiDispatch)
      }
    }
  }

  useEffect(() => {
    if (wargame.wargameList.length && !loggedIn) { byPassLogin() }
  }, [loggedIn, wargame.wargameList])

  const handleCheckPassword = (pass: string): void => {
    if (currentWargame.startsWith(hiddenPrefix)) {
      wargameIsInvalid()
      return
    }
    const check = checkPassword(pass, messageTypes, currentWargame, allForces, currentTurn, playerUiDispatch)
    if (check) {
      const currentUrl = new URL(document.location!.href)
      const byPassParams = {
        wargame: currentWargame,
        access: pass
      }
  
      const byPassParamsArr = Object.keys(byPassParams)
      const [wargameParam, accessParam] = byPassParamsArr.map(key => currentUrl.searchParams.get(key))
  
      if (!wargameParam && wargameParam !== currentWargame && !accessParam && accessParam !== pass) {
        byPassParamsArr.forEach(key => {
          currentUrl.searchParams.set(key, byPassParams[key])
        })
        history.pushState({}, 'null', currentUrl.href)
      }
      setScreen(Room.player)
    } else {
      checkPasswordFail()
    }
  }
  
  // show the relevant screen
  switch (screen) {
    case Room.landing:
      return <PlayerUiLandingScreen
        gameInfo={gameInfo}
        enterSerge={() => { setScreen(Room.lobby) }}
      />
    case Room.lobby:
      return <PlayerUiLobby
        wargameList={wargame.wargameList}
        checkPassword={handleCheckPassword}
        allForces={allForces}
      />
    case Room.player:
      if (selectedForce) {
        return <GameChannelsWithTour />
      }
      return <LoaderScreen />
  }
}

export default PlayerUi
