import React, { useEffect } from 'react'
import _ from 'lodash'
import uniqid from 'uniqid'
import { useSelector, useDispatch } from 'react-redux'
import { GameSetup } from '@serge/components'
import { checkUnique, findDuplicatePasscodes, getUniquePasscode } from '@serge/helpers'
import { channelTemplate, forceTemplate, CHANNEL_MAPPING, CHANNEL_RFI_STATUS } from '../consts'
import {
  addNewForce,
  setCurrentTab,
  saveSettings,
  savePlatformTypes,
  saveForce,
  saveChannel,
  setTabSaved,
  setGameData,
  setSelectedForce,
  setSelectedChannel,
  addNewChannel,
  duplicateChannel,
  saveWargameTitle,
  initiateWargame
} from '../ActionsAndReducers/dbWargames/wargames_ActionCreators'
import { addNotification } from '../ActionsAndReducers/Notification/Notification_ActionCreators'
import { modalAction } from '../ActionsAndReducers/Modal/Modal_ActionCreators'
import { setCurrentViewFromURI } from '../ActionsAndReducers/setCurrentViewFromURI/setCurrentViewURI_ActionCreators'
import { ADMIN_ROUTE, iconUploaderPath } from '@serge/config'

/**
 * TODOS:
 updateWargameTitle
 game setup: saveWargame
 checkWargameNameSaveable
 notSavedNotification
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
    currentTab,
    wargameList,
    wargameTitle
  } = wargame
  const {
    overview,
    platformTypes,
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

  const onPressBack = (e) => {
    e.preventDefault()
    dispatch(setCurrentViewFromURI(ADMIN_ROUTE))
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

  const handleDeleteGameControl = role => {
    dispatch(addNotification(`Role ${role.name} with Game Control permissions cannot be deleted. Please remove Game Control permission.`, 'warning'))
  }

  const handleSaveOverview = overview => {
    console.log('currentWargame', currentWargame, overview)
    dispatch(saveSettings(currentWargame, overview))
  }

  const onDeletePlatformType = data => {
    dispatch(modalAction.open('confirmDelete', {
      type: 'platformType',
      data,
      customMessages: {
        title: `Delete '${data.name}'`,
        message: 'Are you sure you want to permanently delete this Platform Type?'
      }
    }))
  }

  const handleSavePlatformTypes = platformTypes => {
    dispatch(savePlatformTypes(currentWargame, platformTypes))
  }

  const handleSaveForce = newForces => {
    const { selectedForce } = forces
    const selectedForceId = selectedForce.uniqid
    const newForceData = newForces.find(force => force.uniqid === selectedForceId)
    const forceOverview = newForceData.overview
    const forceName = newForceData.name
    newForceData.overview = forceOverview === 'string' ? forceOverview : forces.forces.find((force) => force.uniqid === selectedForceId).overview

    const dupForceRoleNames = findDuplicatePasscodes(newForceData, forces.forces)
    if (dupForceRoleNames.length > 0) {
      dispatch(addNotification(`Duplicate passcodes for: ${_.join(_.map(dupForceRoleNames, dupForceRoleName => dupForceRoleName.forceName + '-' + dupForceRoleName.roleName), ',')}`, 'warning'))
      return
    }

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
    const selectedChannelName = channels.selectedChannel.name
    const selectedChannelId = channel.uniqid
    const newChannelData = channels.channels.find((c) => c.uniqid === selectedChannelId)

    if (typeof channelName === 'string' && channelName.length > 0) {
      if (!isUniqueChannelName(channel)) return

      dispatch(setTabSaved())
      dispatch(saveChannel(currentWargame, channelName, newChannelData, selectedChannelName))
    }

    if (channelName === null) {
      dispatch(saveChannel(currentWargame, selectedChannelName, newChannelData, selectedChannelName))
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
      case 'platform_types':
        saveAction = handleSavePlatformTypes
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

  const onCreateForce = async () => {
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
      template.roles.forEach(role => {
        role.roleId = getUniquePasscode(forces.forces, 'p')
      })
      dispatch(saveForce(currentWargame, id, template, id))
    }
  }

  const onDeleteForce = ({ uniqid: data }) => {
    dispatch(modalAction.open('confirmDelete', {
      type: 'force',
      data
    }))
  }

  const onCreateChannel = (buttonText) => {
    if (channels.dirty) {
      dispatch(modalAction.open('unsavedChannel', 'create-new'))
    } else {
      let id = `channel-${uniqid.time()}`
      if (buttonText && (buttonText === CHANNEL_MAPPING || buttonText === CHANNEL_RFI_STATUS)) {
        id = buttonText
      }
      dispatch(addNewChannel({ name: id, uniqid: id }))
      dispatch(setSelectedChannel({ name: id, uniqid: id }))

      const template = channelTemplate
      template.name = id
      template.uniqid = id

      dispatch(saveChannel(currentWargame, id, template, id))
    }
  }

  const onDeleteChannel = ({ uniqid }) => {
    dispatch(modalAction.open('confirmDelete', { type: 'channel', data: uniqid }))
  }

  const onDuplicateChannel = ({ uniqid }) => {
    dispatch(duplicateChannel(currentWargame, uniqid))
  }

  const onWargameInitiate = () => {
    dispatch(initiateWargame(currentWargame))
  }

  const handleSidebarForcesClick = force => {
    if (forces.dirty) {
      dispatch(modalAction.open('unsavedForce', force))
    } else {
      dispatch(setSelectedForce(force))
    }
  }

  const handleSidebarChannelsClick = channel => {
    if (channels.dirty) {
      dispatch(modalAction.open('unsavedChannel', channel))
    } else {
      dispatch(setTabSaved())
      dispatch(setSelectedChannel(channel))
    }
  }

  const handleSaveWargameTitle = (newGameTitle) => {
    let wargameNames = wargameList.map((game) => game.title)
    wargameNames = _.pull(wargameNames, wargameTitle)

    if (!checkUnique(newGameTitle, wargameNames)) {
      dispatch(addNotification('Wargame name is not unique.', 'warning'))
      return
    }

    if (typeof newGameTitle === 'string' && newGameTitle.length > 0) {
      dispatch(saveWargameTitle(currentWargame, newGameTitle))
    }

    if (newGameTitle === null || newGameTitle.length === 0) {
      window.alert('no channel name')
    }
  }

  useEffect(() => {
    if (currentTab === 'forces' && forces.selectedForce === '') {
      dispatch(setSelectedForce(forces.forces[0]))
    } else if (currentTab === 'channels' && channels.selectedChannel === '') {
      dispatch(setSelectedChannel(channels.channels[0]))
    }
  }, [currentTab])

  const getSelectedChannel = () => {
    return channels && channels.channels.find(channel => channel.uniqid === channels.selectedChannel.uniqid)
  }

  return (
    <GameSetup
      activeTab={currentTab || tabs[0]}
      tabs={tabs}
      wargame={wargame}
      wargameChanged={isWargameChanged()}
      onTabChange={onTabChange}
      onPressBack={onPressBack}
      overview={overview}
      platformTypes={platformTypes}
      forces={forces.forces}
      selectedForce={forces.selectedForce}
      channels={channels.channels}
      onOverviewChange={handleFormChange}
      onPlatformTypesChange={handleFormChange}
      onDeletePlatformType={onDeletePlatformType}
      onForcesChange={handleFormChange}
      onCreateForce={onCreateForce}
      onDeleteForce={onDeleteForce}
      onSidebarForcesClick={handleSidebarForcesClick}
      onSidebarChannelsClick={handleSidebarChannelsClick}
      onChannelsChange={handleFormChange}
      onCreateChannel={onCreateChannel}
      onDeleteChannel={onDeleteChannel}
      onDuplicateChannel={onDuplicateChannel}
      selectedChannel={getSelectedChannel()}
      onSave={onSave}
      messageTemplates={messageTypes.messages}
      onSaveGameTitle={handleSaveWargameTitle}
      onWargameInitiate={onWargameInitiate}
      iconUploadUrl={iconUploaderPath}
      onDeleteGameControl={handleDeleteGameControl}
    />
  )
}

export default AdminGameSetup
