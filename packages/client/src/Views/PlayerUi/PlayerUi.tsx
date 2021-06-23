import React, { useState, useEffect } from 'react'
import { Props } from './types.d'
import { WargameList } from '@serge/custom-types'

import PlayerUiLandingScreen from '../PlayerUiLandingScreen'
import PlayerUiLobby from '../PlayerUiLobby'
import GameChannelsWithTour from '../GameChannelsWithTour'
import LoaderScreen from '../../Components/LoaderScreen'

import checkPassword from './helpers/checkPassword'
import {  expiredStorage } from '../../consts'
import {
  getWargame,
} from '../../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { usePlayerUiState, usePlayerUiDispatch } from '../../Store/PlayerUi'

enum Room {
  landing,
  lobby,
  player
}

const PlayerUi = ({ gameInfo, wargame, messageTypes, checkPasswordFail, loadData}: Props): React.ReactElement => {
  const [tourIsOpen, setTourIsOpen] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [waitingLoginPassword, setWaitingLoginPassword] = useState('')
  const [screen, setScreen] = useState<Room>(Room.landing)
  const {
    allForces,
    currentWargame,
    selectedForce,
    selectedRoleName,
    wargameTitle
  } = usePlayerUiState()

  const dispatch = usePlayerUiDispatch()

  useEffect(() => {
    loadData()
    // @ts-ignore
    window.channelTabsContainer = window.channelTabsContainer || {}
  }, [])

  useEffect(() => {
    if(selectedForce && selectedRoleName) {
      const storageTourIsOpen = expiredStorage.getItem(`${wargameTitle}-${selectedForce.uniqid}-${selectedRoleName}-tourDone`) !== 'done'
      if (storageTourIsOpen !== tourIsOpen) setTourIsOpen(storageTourIsOpen)
    }
  }, [selectedForce, selectedRoleName])

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
        await getWargame(selectedWargame.name)(dispatch)
      }
    }
  }

  useEffect(() => {
    if (wargame.wargameList.length && !loggedIn)
      byPassLogin()
  }, [loggedIn, wargame.wargameList])


  const handleCheckPassword = (pass: string): void => {
    const check = checkPassword(pass, messageTypes, currentWargame, allForces, dispatch)
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
        history.pushState({}, 'null', currentUrl.href);
      }
      setScreen(Room.player)
    }
    else checkPasswordFail()
  }

  const renderScreen = () => {
    // show the relevant screen
    switch(screen) {
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
          const setStorageKey = (): string => `${wargameTitle}-${selectedForce.uniqid}-${selectedRoleName}-tourDone`
          return <GameChannelsWithTour
            storageKey={setStorageKey()}
            tourIsOpen={tourIsOpen}
          />
        }
        return <LoaderScreen />
    }
  }

  return (
    <>
      {renderScreen()}
    </>
  )
}

export default PlayerUi
