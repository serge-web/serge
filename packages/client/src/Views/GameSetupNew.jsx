import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GameSetup } from '@serge/components'
import {
  setCurrentTab,
  saveSettings,
  saveForce,
  saveChannel,
  setTabSaved,
  setGameData
} from '../ActionsAndReducers/dbWargames/wargames_ActionCreators'
import { addNotification } from '../ActionsAndReducers/Notification/Notification_ActionCreators'
import { checkUnique } from '@serge/helpers'
import _ from 'lodash'

/**
 * TODOS:
 updateWargameTitle
 game setup: saveWargame
 checkWargameNameSaveable
 notSavedNotification
 forces: setSelected
 forces: deleteForceFromList
 forces: createForce
 channels: createChannel
 back button
 */
const AdminGameSetup = () => {
  const dispatch = useDispatch()
  const wargame = useSelector(state => state.wargame)
  const messageTypes = useSelector(state => state.messageTypes)
  const {
    data,
    currentWargame,
    currentTab
  } = wargame
  const {
    overview,
    platform_types: platformTypes,
    forces,
    channels
  } = data
  const tabs = Object.keys(data)
  const isWargameChanged = () => {
    return Object.values(data).some((item) => item.dirty)
  }
  const onTabChange = tab => {
    if (!isWargameChanged()) {
      dispatch(setCurrentTab(tab))
    } else {
      dispatch(addNotification('Unsaved changes', 'warning'))
    }
  }

  const isUniqueName = ({ oldName, newName, list, label }) => {
    let listNames = list.map((item) => item.name)
    listNames = _.pull(listNames, oldName)

    if (!checkUnique(newName, listNames)) {
      dispatch(addNotification(`${label} name is not unique.`, 'warning'))
      return false
    }
    return true
  }

  const isUniqueForceName = force => {
    const selectedForce = forces.selectedForce.name
    return isUniqueName({
      oldName: selectedForce,
      newName: force.name,
      list: forces.forces,
      label: 'Force'
    })
  }

  const isUniqueChannelName = channel => {
    const selectedChannel = channels.selectedChannel
    return isUniqueName({
      oldName: selectedChannel,
      newName: channel.name,
      list: channels.channels,
      label: 'Channel'
    })
  }

  const handleFormChange = changes => {
    dispatch(setGameData(changes))
  }

  const handleSaveOverview = overview => {
    dispatch(saveSettings(currentWargame, overview))
  }

  const handleSaveForce = force => {
    const { selectedForce } = forces
    const selectedForceId = selectedForce.uniqid
    const forceOverview = force.overview
    const forceName = force.name
    const newForceData = forces.forces.find((f) => f.uniqid === selectedForceId)
    newForceData.overview = forceOverview === 'string' ? forceOverview : forces.forces.find((force) => force.uniqid === selectedForceId).overview

    if (typeof forceName === 'string' && forceName.length > 0) {
      if (!isUniqueForceName(force)) return
      const selectedForce = forces.selectedForce.name
      dispatch(saveForce(currentWargame, forceName, newForceData, selectedForce))
    }

    if (forceName === null) {
      const selectedForce = forces.selectedForce.name
      dispatch(saveForce(currentWargame, selectedForce, newForceData, selectedForce))
    } else if (forceName.length === 0) {
      dispatch(addNotification('No Force Name', 'warning'))
    }
  }

  const handleSaveChannel = channel => {
    const channelName = channel.name
    const selectedChannel = channels.selectedChannel.name
    const newChannelData = channels.channels.find((c) => c.name === selectedChannel)

    if (typeof channelName === 'string' && channelName.length > 0) {
      if (!isUniqueChannelName(channel)) return

      dispatch(setTabSaved())
      dispatch(saveChannel(currentWargame, channelName, newChannelData, selectedChannel))
    }

    if (channelName === null) {
      dispatch(saveChannel(currentWargame, selectedChannel, newChannelData, selectedChannel))
    } else if (channelName.length === 0) {
      window.alert('no channel name')
    }
  }

  const onSave = updates => {
    let saveAction
    switch (currentTab) {
      case 'overview':
        saveAction = handleSaveOverview
        break
      case 'forces':
        saveAction = handleSaveForce
        break
      case 'channels':
        saveAction = handleSaveChannel
        break
      default:
        saveAction = console.error
        break
    }
    saveAction(updates)
  }

  return (
    <GameSetup
      activeTab={currentTab || tabs[0]}
      tabs={tabs}
      wargame={wargame}
      wargameChanged={isWargameChanged()}
      onTabChange={onTabChange}
      overview={overview}
      platformTypes={platformTypes}
      forces={forces.forces}
      channels={channels.channels}
      onOverviewChange={handleFormChange}
      onPlatformTypesChange={handleFormChange}
      onForcesChange={handleFormChange}
      onChannelsChange={handleFormChange}
      onSave={onSave}
      messageTemplates={messageTypes.messages}
    />
  )
}

export default AdminGameSetup
