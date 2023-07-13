/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect } from 'react'
import _ from 'lodash'
import uniqid from 'uniqid'
import { useSelector, useDispatch } from 'react-redux'
import GameSetup from '../Components/local/templates/game-setup'
import { checkUnique, getUniquePasscode, findDuplicatePasscodes, findEmptyRolenames } from 'src/Helpers'
import { forceTemplate } from '../consts'
import {
  addNewForce,
  setCurrentTab,
  saveSettings,
  savePlatformTypes,
  saveAnnotation,
  saveForce,
  saveChannel,
  setTabSaved,
  setGameData,
  setSelectedForce,
  setSelectedChannel,
  duplicateChannel,
  saveWargameTitle,
  initiateWargame,
  duplicatePlatformType,
  duplicateAnnotation,
  duplicateForce
} from '../ActionsAndReducers/dbWargames/wargames_ActionCreators'
import { addNotification } from '../ActionsAndReducers/Notification/Notification_ActionCreators'
import { modalAction } from '../ActionsAndReducers/Modal/Modal_ActionCreators'
import { setCurrentViewFromURI } from '../ActionsAndReducers/setCurrentViewFromURI/setCurrentViewURI_ActionCreators'
import { ADMIN_ROUTE, iconUploaderPath, AdminTabs } from 'src/config'
import { Asset, ChannelTypes, ForceData, MessageTypes, PlatformType, Role, RootState, Wargame, WargameOverview, IconOption, AnnotationIcons, AnnotationMarkerData } from 'src/custom-types'

/**
 * TODOS:
 updateWargameTitle
 game setup: saveWargame
 checkWargameNameSaveable
 notSavedNotification
 channels: createChannel
 back button
 */

 type UniqueNameInterface = {
  newName: string
  list: any[]
  label: string
  oldName: string
 }

const AdminGameSetup: React.FC = () => {
  const dispatch = useDispatch()
  const { wargame, messageTypes }: { wargame: Wargame, messageTypes: MessageTypes } = useSelector(({ wargame, messageTypes }: RootState) => ({ wargame, messageTypes }))

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
    // @ts-ignore
    platform_types, // TODO: legacy name. To be deleted.
    forces,
    channels,
    annotationIcons
  } = data
  const tabs = Object.keys(data)

  const isWargameChanged = () => {
    return Object.values(data).some((item) => item.dirty)
  }
  const onTabChange = (tab: Notification) => {
    if (!isWargameChanged()) {
      dispatch(setCurrentTab(tab))
    } else {
      dispatch(addNotification('Unsaved changes', 'warning'))
    }
  }

  const onPressBack = (e: MouseEvent) => {
    e.preventDefault()
    dispatch(setCurrentViewFromURI(ADMIN_ROUTE))
  }

  const isUniqueName = ({ newName, list, label }: UniqueNameInterface) => {
    let listNames = list.map((item: ForceData) => item.name)
    listNames = _.pull(listNames, newName)

    if (!checkUnique(newName, listNames)) {
      dispatch(addNotification(`${label} name is not unique.`, 'warning'))
      return false
    }
    return true
  }

  const isUniqueForceName = (force: ForceData) => {
    const selectedForce = forces.selectedForce
    return isUniqueName({
      oldName: selectedForce as string,
      newName: force.name,
      list: forces.forces,
      label: 'Force'
    })
  }

  const isUniqueChannelName = (channel: ChannelTypes) => {
    const selectedChannel = channels.selectedChannel
    return isUniqueName({
      oldName: selectedChannel as string,
      newName: channel.name,
      list: channels.channels,
      label: 'Channel'
    })
  }

  const handleFormChange = (changes: WargameOverview) => {
    dispatch(setGameData(changes))
  }

  const handleDeleteGameControl = (roles: Role[], key: number, handleChange: () => void) => {
    const role = roles[key]
    if (role.isGameControl) {
      dispatch(addNotification(`Role ${role.name} with Game Control permissions cannot be deleted. Please remove Game Control permission.`, 'warning'))
    } else {
      dispatch(modalAction.open('confirmDelete', { type: 'role', data: { roles, key, handleChange } }))
    }
  }

  const handleSaveOverview = (overview: WargameOverview) => {
    console.log('currentWargame', currentWargame, overview)
    if (currentWargame) dispatch(saveSettings(currentWargame, overview))
  }

  const onDeletePlatformType = (data: PlatformType) => {
    dispatch(modalAction.open('confirmDelete', {
      type: 'platformType',
      data,
      customMessages: {
        title: `Delete '${data.name}'`,
        message: 'Are you sure you want to permanently delete this Platform Type?'
      }
    }))
  }
   
  const onDuplicatePlatformType = (data: PlatformType) => {
    if (currentWargame) dispatch(duplicatePlatformType(currentWargame, data))
  }

  const handleSavePlatformTypes = (platformTypes: PlatformType) => {
    if (currentWargame) dispatch(savePlatformTypes(currentWargame, platformTypes))
  }

  const handleSaveAnnotation = (annotation: AnnotationMarkerData) => {
    if (currentWargame) dispatch(saveAnnotation(currentWargame, annotation))
  }

  const handleSaveForce = (newForces: ForceData[]) => {
    const { selectedForce } = forces
    const { uniqid } = selectedForce as ForceData
    const newForceData = newForces.find(force => force.uniqid === uniqid)
    if (newForceData) {
      const forceOverview = newForceData.overview
      const forceName = newForceData.name
      // @ts-ignore
      newForceData.overview = forceOverview === 'string' ? forceOverview : forces.forces.find((force) => force.uniqid === uniqid).overview
  
      const empForceRoleNames = findEmptyRolenames(newForceData, forces.forces)
      if (empForceRoleNames.length > 0) {
        dispatch(addNotification(`A Role Name must be provided for: ${_.join(_.map(empForceRoleNames, empForceRoleName => empForceRoleName.forceName + '-' + empForceRoleName.roleName), ',')}`, 'warning'))
        return
      }
  
      const dupForceRoleNames = findDuplicatePasscodes(newForceData, forces.forces)
      if (dupForceRoleNames.length > 0) {
        dispatch(addNotification(`Duplicate passcodes for: ${_.join(_.map(dupForceRoleNames, dupForceRoleName => dupForceRoleName.forceName + '-' + dupForceRoleName.roleName), ',')}`, 'warning'))
        return
      }
  
      if (typeof forceName === 'string' && forceName.length > 0) {
        if (!isUniqueForceName(newForceData)) return
        if (currentWargame) dispatch(saveForce(currentWargame, newForceData))
      }
  
      if (forceName === null) {
        if (currentWargame) dispatch(saveForce(currentWargame, newForceData))
      } else if (forceName.length === 0) {
        dispatch(addNotification('No Force Name', 'warning'))
      }
    }
  }

  const handleSaveChannel = (channel: ChannelTypes) => {
    const channelName = channel.name
    const selectedChannelId = channel.uniqid
    const newChannelData = channels.channels.find((c) => c.uniqid === selectedChannelId)

    if (currentWargame && newChannelData) {
      if (typeof channelName === 'string' && channelName.length > 0) {
        if (!isUniqueChannelName(channel)) return
  
        dispatch(setTabSaved())
        dispatch(saveChannel(currentWargame, newChannelData))
      }
  
      if (channelName === null) {
        dispatch(saveChannel(currentWargame, newChannelData))
      } else if (channelName.length === 0) {
        window.alert('no channel name')
      }
    }
  }

  const onSave = (updates: WargameOverview | PlatformType | ForceData | ChannelTypes | AnnotationIcons) => {
    let saveAction
    switch (currentTab) {
      case AdminTabs.Overview:
        saveAction = handleSaveOverview
        break
      case AdminTabs.PlatformTypes:
        saveAction = handleSavePlatformTypes
        break
      case AdminTabs.Forces:
        saveAction = handleSaveForce
        break
      case AdminTabs.Channels:
        saveAction = handleSaveChannel
        break
      case AdminTabs.Annotations:
        saveAction = handleSaveAnnotation
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
      if (currentWargame) dispatch(saveForce(currentWargame, template))
    }
  }

  const onDeleteForce = ({ uniqid: data }: { uniqid: string }) => {
    dispatch(modalAction.open('confirmDelete', {
      type: 'force',
      data
    }))
  }

  const onDuplicateForce = (data: ForceData) => {
    if (currentWargame) dispatch(duplicateForce(currentWargame, data))
  }

  const onCreateChannel = (_id: string, createdChannel: ChannelTypes) => {
    if (channels.dirty) {
      dispatch(modalAction.open('unsavedChannel', 'create-new'))
    } else {
      if (currentWargame) dispatch(saveChannel(currentWargame, createdChannel))
    }
  }

  const onDeleteChannel = ({ uniqid }: { uniqid: string }) => {
    dispatch(modalAction.open('confirmDelete', { type: 'channel', data: uniqid }))
  }

  const onDeleteAsset = (setList: (newList: Array<Asset>) => void, item: Asset) => {
    dispatch(modalAction.open('confirmDelete', { type: 'asset', data: { setList, item } }))
  }

  const onDuplicateChannel = ({ uniqid }: { uniqid: string }) => {
    if (currentWargame) dispatch(duplicateChannel(currentWargame, uniqid))
  }

  const onWargameInitiate = () => {
    if (currentWargame) dispatch(initiateWargame(currentWargame))
  }

  const handleSidebarForcesClick = (force: { name: string, uniqid: string, iconURL: string }) => {
    if (forces.dirty) {
      dispatch(modalAction.open('unsavedForce', force))
    } else {
      dispatch(setSelectedForce(force))
    }
  }

  const handleSidebarChannelsClick = (channel: ChannelTypes) => {
    if (channels.dirty) {
      dispatch(modalAction.open('unsavedChannel', channel))
    } else {
      dispatch(setTabSaved())
      dispatch(setSelectedChannel(channel))
    }
  }

  const handleSaveWargameTitle = (newGameTitle: string) => {
    let wargameNames = wargameList.map((game) => game.title)
    wargameNames = _.pull(wargameNames, wargameTitle)

    if (!checkUnique(newGameTitle, wargameNames)) {
      dispatch(addNotification('Wargame name is not unique.', 'warning'))
      return
    }

    if (typeof newGameTitle === 'string' && newGameTitle.length > 0) {
      if (currentWargame) dispatch(saveWargameTitle(currentWargame, newGameTitle))
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

  const getSelectedChannel = (): any => {
    if (channels.selectedChannel) {
      const { uniqid } = channels.selectedChannel as { uniqid: string }
      return uniqid && channels.channels.find((channel: ChannelTypes) => channel.uniqid === uniqid)
    }
  }

  const onDeleteAnnotation = (data: IconOption) => {
    dispatch(modalAction.open('confirmDelete', {
      type: 'annotation',
      data,
      customMessages: {
        title: `Delete '${data.name}'`,
        message: 'Are you sure you want to permanently delete this annotation Type?'
      }
    }))
  }

  const onDuplicateAnnotation = (data: IconOption) => {
    if (currentWargame) dispatch(duplicateAnnotation(currentWargame, data))
  }

  return (
    <GameSetup
      activeTab={currentTab || tabs[0]}
      tabs={tabs}
      wargame={wargame}
      wargameChanged={isWargameChanged()}
      // @ts-ignore
      onTabChange={onTabChange}
      onPressBack={onPressBack}
      overview={overview}
      platformTypes={platformTypes || platform_types}
      forces={forces.forces}
      // @ts-ignore
      selectedForce={forces.selectedForce}
      channels={channels.channels}
      onOverviewChange={handleFormChange}
      // @ts-ignore
      onPlatformTypesChange={handleFormChange}
      onDeletePlatformType={onDeletePlatformType}
      onDuplicatePlatformType={onDuplicatePlatformType}
      // @ts-ignore
      onForcesChange={handleFormChange}
      onCreateForce={onCreateForce}
      // @ts-ignore
      onDeleteForce={onDeleteForce}
      // @ts-ignore
      onDuplicateForce={onDuplicateForce}
      onSidebarForcesClick={handleSidebarForcesClick}
      onSidebarChannelsClick={handleSidebarChannelsClick}
      // @ts-ignore
      onChannelsChange={handleFormChange}
      // @ts-ignore
      onCreateChannel={onCreateChannel}
      // @ts-ignore
      onDeleteChannel={onDeleteChannel}
      // @ts-ignore
      onDuplicateChannel={onDuplicateChannel}
      selectedChannel={getSelectedChannel()}
      onSave={onSave}
      messageTemplates={messageTypes.messages}
      onSaveGameTitle={handleSaveWargameTitle}
      onWargameInitiate={onWargameInitiate}
      iconUploadUrl={iconUploaderPath}
      // @ts-ignore
      customDeleteHandler={handleDeleteGameControl}
      // @ts-ignore
      onDeleteAsset={onDeleteAsset}
      onDeleteAnnotation={onDeleteAnnotation}
      onDuplicateAnnotation={onDuplicateAnnotation}
      // @ts-ignore
      onAnnotationChange={handleFormChange}
      annotation={annotationIcons}
    />
  )
}

export default AdminGameSetup
