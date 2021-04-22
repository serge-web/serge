import React, { useState, useEffect } from 'react'
import { Props } from './types'
import { Role, WargameList } from '@serge/custom-types'

import PlayerUiLandingScreen from '../PlayerUiLandingScreen'
import PlayerUiLobby from '../PlayerUiLobby'
import GameChannelsWithTour from '../GameChannelsWithTour'
import LoaderScreen from '../../Components/LoaderScreen'

import checkPassword from './helpers/checkPassword'
import { expiredStorage } from '../../consts'
import { getWargame } from '../../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { usePlayerUiState, usePlayerUiDispatch } from '../../Store/PlayerUi'

// eslint-disable-next-line no-unused-vars
enum Room {
  // eslint-disable-next-line no-unused-vars
  landing,
  // eslint-disable-next-line no-unused-vars
  lobby,
  // eslint-disable-next-line no-unused-vars
  player,
}

const PlayerUi = ({
  gameInfo,
  wargame,
  messageTypes,
  checkPasswordFail,
  loadData
}: Props): React.ReactElement => {
  const [tourIsOpen, setTourIsOpen] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [waitingLoginPassword, setWaitingLoginPassword] = useState('')
  const [screen, setScreen] = useState<Room>(Room.landing)
  const {
    allForces,
    currentWargame,
    selectedForce,
    selectedRole,
    wargameTitle
  } = usePlayerUiState()

  const dispatch = usePlayerUiDispatch()

  const handleCheckPassword = (pass: string): void => {
    const check = checkPassword(
      pass,
      messageTypes,
      currentWargame,
      allForces,
      dispatch
    )
    if (check) setScreen(Room.player)
    else checkPasswordFail()
  }

  useEffect(() => {
    loadData()
    // @ts-ignore
    window.channelTabsContainer = window.channelTabsContainer || {}
    if (selectedForce && selectedRole) {
      const storageTourIsOpen =
        expiredStorage.getItem(
          `${wargameTitle}-${selectedForce.uniqid}-${selectedRole}-tourDone`
        ) !== 'done'
      if (storageTourIsOpen !== tourIsOpen) setTourIsOpen(storageTourIsOpen)
    }
  }, [])

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
      const selectedWargame: WargameList | undefined = wargame.wargameList.find(
        (game) => !!game.name.match(_wargame)
      )
      if (selectedWargame) {
        setLoggedIn(true)
        setWaitingLoginPassword(_access)
        await getWargame(selectedWargame.name)(dispatch)
      }
    }
  }

  useEffect(() => {
    if (wargame.wargameList.length && !loggedIn) byPassLogin()
  }, [loggedIn, wargame.wargameList])

  // show the relevant screen
  switch (screen) {
    case Room.landing:
      return (
        <PlayerUiLandingScreen
          gameInfo={gameInfo}
          enterSerge={() => {
            setScreen(Room.lobby)
          }}
        />
      )
    case Room.lobby:
      // TODO import type from PlayerUiLobby or move this function in to PlayerUiLobby
      const roleOptions = (): { name: string; roles: Role[] }[] =>
        allForces.map((force) => ({ name: force.name, roles: force.roles }))

      return (
        <PlayerUiLobby
          wargameList={wargame.wargameList}
          roleOptions={roleOptions()}
          checkPassword={handleCheckPassword}
        />
      )
    case Room.player:
      if (selectedForce) {
        const setStorageKey = (): string =>
          `${wargameTitle}-${selectedForce.uniqid}-${selectedRole}-tourDone`
        return (
          <GameChannelsWithTour
            storageKey={setStorageKey()}
            tourIsOpen={tourIsOpen}
          />
        )
      }
      return <LoaderScreen />
  }
}

export default PlayerUi
