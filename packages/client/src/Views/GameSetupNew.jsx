import React, { useEffect } from 'react'
import _ from 'lodash'
import uniqid from 'uniqid'
import { useSelector, useDispatch } from 'react-redux'
import { GameSetup } from '@serge/components'
import { checkUnique } from '@serge/helpers'
import { forceTemplate } from '../consts'
import {
  addNewForce,
  setCurrentTab,
  saveSettings,
  saveForce,
  saveChannel,
  setTabSaved,
  setGameData,
  setSelectedForce
} from '../ActionsAndReducers/dbWargames/wargames_ActionCreators'
import { addNotification } from '../ActionsAndReducers/Notification/Notification_ActionCreators'
import { modalAction } from '../ActionsAndReducers/Modal/Modal_ActionCreators'

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

  const isUniqueName = ({ newName, list, label }) => {
    let listNames = list.map((item) => item.name)
    listNames = _.pull(listNames, newName)

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

  const handleSaveForce = newForces => {
    const { selectedForce } = forces
    const selectedForceId = selectedForce.uniqid
    const newForceData = newForces.find(force => force.uniqid === selectedForceId)
    const forceOverview = newForceData.overview
    const forceName = newForceData.name
    newForceData.overview = forceOverview === 'string' ? forceOverview : forces.forces.find((force) => force.uniqid === selectedForceId).overview

    if (typeof forceName === 'string' && forceName.length > 0) {
      if (!isUniqueForceName(newForceData)) return
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

  const onCreateForce = async callback => {
    if (forces.dirty) {
      dispatch(modalAction.open('unsavedForce', 'create-new'))
    } else {
      const id = 'force-' + uniqid.time()
      const newForce = { name: id, uniqid: id }
      dispatch(addNewForce(newForce))
      dispatch(setSelectedForce(newForce))

      const template = forceTemplate
      template.name = id
      template.uniqid = id

      await dispatch(saveForce(currentWargame, id, template, id))
    }
  }

  const onDeleteForce = ({ uniqid: data }) => {
    dispatch(modalAction.open('confirmDelete', {
      type: 'force',
      data
    }))
  }

  const handleSidebarForcesClick = force => {
    if (forces.dirty) {
      dispatch(modalAction.open('unsavedForce', force))
    } else {
      dispatch(setSelectedForce(force))
    }
  }

  useEffect(() => {
    if (currentTab === 'forces' && forces.selectedForce === '') {
      dispatch(setSelectedForce(forces.forces[0]))
    }
  }, [currentTab])

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
      selectedForce={forces.selectedForce}
      channels={channels.channels}
      onOverviewChange={handleFormChange}
      onPlatformTypesChange={handleFormChange}
      onForcesChange={handleFormChange}
      onCreateForce={onCreateForce}
      onDeleteForce={onDeleteForce}
      onSidebarForcesClick={handleSidebarForcesClick}
      onChannelsChange={handleFormChange}
      onSave={onSave}
      messageTemplates={messageTypes.messages}
    />
  )
}

export default AdminGameSetup
