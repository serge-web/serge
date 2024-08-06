/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect } from 'react'
import _ from 'lodash'
import uniqid from 'uniqid'
import { useSelector, useDispatch } from 'react-redux'
import GameSetup from '../Components/local/templates/game-setup'
import { checkUnique, getUniquePasscode, findDuplicatePasscodes, findEmptyRolenames } from 'src/Helpers'
import {
  addNewForce,
  setCurrentTab,
  saveSettings,
  saveForce,
  saveChannel,
  setTabSaved,
  setGameData,
  setWargameTitle,
  setSelectedForce,
  setSelectedChannel,
  setSelectedTemplate,
  duplicateChannel,
  saveWargameTitle,
  initiateWargame,
  duplicateForce,
  duplicateTemplate,
  saveTemplate
} from '../ActionsAndReducers/dbWargames/wargames_ActionCreators'
import { addNotification } from '../ActionsAndReducers/Notification/Notification_ActionCreators'
import { modalAction } from '../ActionsAndReducers/Modal/Modal_ActionCreators'
import { setCurrentViewFromURI } from '../ActionsAndReducers/setCurrentViewFromURI/setCurrentViewURI_ActionCreators'
import { ADMIN_ROUTE, iconUploaderPath, AdminTabs, forceTemplate } from 'src/config'
import { ChannelTypes, ForceData, Role, RootState, WargamesState, WargameOverview, WargameDataChange, Wargame, TemplateBody } from 'src/custom-types'
import { Item } from 'src/Components/local/molecules/editable-list'

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
  const { wargame }: { wargame: WargamesState } = useSelector(({ wargame }: RootState) => ({ wargame }))

  const {
    data,
    currentWargame,
    currentTab,
    wargameList,
    wargameTitle
  } = wargame
  const {
    overview,
    forces,
    channels,
    templates
  } = data
  const tabs = Object.keys(data)
  const isWargameChanged = () => {
    return Object.values(data).some((item) => item.dirty)
  }
  const onTabChange = (tab: string) => {
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

  const handleFormChange = (changes: WargameDataChange) => {
    dispatch(setGameData(changes))
  }

  const handleTitleChnage = (title: string) => {
    dispatch(setWargameTitle(title))
  }

  const handleDeleteGameControl = (roles: Role[], key: number, handleChange: (item: Item[]) => void) => {
    const role = roles[key]
    if (role.isGameControl) {
      dispatch(addNotification(`Role ${role.name} with Game Control permissions cannot be deleted. Please remove Game Control permission.`, 'warning'))
    } else {
      dispatch(modalAction.open('confirmDelete', { type: 'role', data: { roles, key, handleChange } }))
    }
  }

  const handleSaveOverview = (overview: WargameOverview) => {
    if (currentWargame) dispatch(saveSettings(currentWargame, overview))
  }

  const handleSaveForce = (newForces: ForceData[]) => {
    const { selectedForce } = forces
    const { uniqid } = selectedForce as ForceData
    const newForceData = newForces.find(force => force.uniqid === uniqid)
  
    if (newForceData) {
      updateForceOverview(newForceData, uniqid)
  
      const empForceRoleNames = findEmptyRolenames(newForceData, forces.forces)
      if (empForceRoleNames.length > 0) {
        notifyEmptyRoleNames(empForceRoleNames)
        return
      }
  
      const dupForceRoleNames = findDuplicatePasscodes(newForceData, forces.forces)
      if (dupForceRoleNames.length > 0) {
        notifyDuplicatePasscodes(dupForceRoleNames)
        return
      }
  
      validateAndSaveForce(newForceData)
    }
  }
  
  const updateForceOverview = (newForceData: ForceData, uniqid: string) => {
    const forceOverview = newForceData.overview
    newForceData.overview = typeof forceOverview === 'string' 
      ? forceOverview 
      : forces.forces.find((force) => force.uniqid === uniqid)?.overview ?? ''
  }
  
  const notifyEmptyRoleNames = (empForceRoleNames: any[]) => {
    dispatch(addNotification(`A Role Name must be provided for: ${_.join(_.map(empForceRoleNames, empForceRoleName => empForceRoleName.forceName + '-' + empForceRoleName.roleName), ',')}`, 'warning'))
  }
  
  const notifyDuplicatePasscodes = (dupForceRoleNames: any[]) => {
    dispatch(addNotification(`Duplicate passcodes for: ${_.join(_.map(dupForceRoleNames, dupForceRoleName => dupForceRoleName.forceName + '-' + dupForceRoleName.roleName), ',')}`, 'warning'))
  }
  
  const validateAndSaveForce = (newForceData: ForceData) => {
    const forceName = newForceData.name
    if (typeof forceName === 'string' && forceName.length > 0) {
      if (!isUniqueForceName(newForceData)) return
      if (currentWargame) dispatch(saveForce(currentWargame, newForceData))
    } else if (forceName === null) {
      if (currentWargame) dispatch(saveForce(currentWargame, newForceData))
    } else if (forceName.length === 0) {
      dispatch(addNotification('No Force Name', 'warning'))
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

  const handleSaveTemplate = (template: TemplateBody) => {
    const selectedId = template._id
    const templateTitle = template.title
    const existingTemplate = templates.templates.find(temp => temp._id === selectedId)
    const isDuplicateTitle = templates.templates.filter(temp => temp.title === templateTitle).length > 1
  
    if (!currentWargame || !existingTemplate) {
      return // No current wargame or template not found
    }
  
    if (templateTitle.trim().length === 0) {
      window.alert('Please provide a template name.')
      return
    }
  
    if (isDuplicateTitle) {
      window.alert('Template name should not be duplicated.')
      return
    }
  
    dispatch(saveTemplate(currentWargame, template))
  }

  const onSave = (updates: WargameOverview | ForceData | ChannelTypes) => {
    let saveAction
    switch (currentTab) {
      case AdminTabs.Overview:
        saveAction = handleSaveOverview
        break
      case AdminTabs.Forces:
        saveAction = handleSaveForce
        break
      case AdminTabs.Channels:
        saveAction = handleSaveChannel
        break
      case AdminTabs.Templates:
        saveAction = handleSaveTemplate
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
    console.log('_id', _id)
    console.log('createdChannel', createdChannel)
    if (channels.dirty) {
      dispatch(modalAction.open('unsavedChannel', 'create-new'))
    } else {
      if (currentWargame) dispatch(saveChannel(currentWargame, createdChannel))
    }
  }

  const onDeleteChannel = ({ uniqid }: { uniqid: string }) => {
    dispatch(modalAction.open('confirmDelete', { type: 'channel', data: uniqid }))
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

  const onSidebarTemplatesClick = (template: TemplateBody) => {
    if (!templates) {
      dispatch(modalAction.open('unsavedTemplate', template))
    } else {
      dispatch(setTabSaved())
      dispatch(setSelectedTemplate(template))
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
      if (currentWargame) dispatch(saveWargameTitle(currentWargame, newGameTitle, wargameList))
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
    } else if (currentTab === 'templates' && templates && templates.selectedTemplate === '') {
      dispatch(setSelectedTemplate(templates.templates[0]))
    }
  }, [currentTab])

  const getSelectedChannel = (): any => {
    if (channels.selectedChannel) {
      const { uniqid } = channels.selectedChannel as { uniqid: string }
      return uniqid && channels.channels.find((channel: ChannelTypes) => channel.uniqid === uniqid)
    }
  }

  const getSelectedTemplate = (): any => {
    if (templates && templates.selectedTemplate) {
      const { _id } = templates.selectedTemplate as { _id: string }
      return _id && templates.templates.find((template) => template._id === _id)
    }
  }

  const onCreateTemplate = (templateBody: TemplateBody) => {
    if (templates.dirty) {
      dispatch(modalAction.open('unsavedForce', 'create-new'))
    } else {
      dispatch(setSelectedTemplate(templateBody))
      
      if (currentWargame) dispatch(saveTemplate(currentWargame, templateBody))
    }
  }

  const onDeleteTemplate = ({ _id }: { _id: string }) => {
    dispatch(modalAction.open('confirmDelete', { type: 'template', data: _id }))
  }

  const onDuplicateTemplate = ({ _id }: { _id: string }) => {
    if (currentWargame) dispatch(duplicateTemplate(currentWargame, _id))
  }
  
  return (
    <GameSetup
      activeTab={currentTab || tabs[0]}
      tabs={tabs}
      wargame={wargame as Wargame}
      wargameChanged={isWargameChanged()}
      onTabChange={onTabChange}
      onPressBack={onPressBack}
      overview={overview}
      forces={forces.forces}
      selectedForce={forces.selectedForce as ForceData}
      channels={channels.channels}
      onOverviewChange={handleFormChange}
      onForcesChange={handleFormChange}
      onChannelsChange={handleFormChange}
      onDeleteForce={onDeleteForce}
      onDeleteChannel={onDeleteChannel}
      onSidebarForcesClick={handleSidebarForcesClick}
      onSidebarChannelsClick={handleSidebarChannelsClick}
      onCreateChannel={onCreateChannel}
      onCreateForce={onCreateForce}
      onDuplicateChannel={onDuplicateChannel}
      onCreateTemplate={onCreateTemplate}
      // @ts-ignore
      onDeleteTemplate={onDeleteTemplate}
      // @ts-ignore
      onDuplicateTemplate={onDuplicateTemplate}
      selectedTemplate={getSelectedTemplate()}
      // @ts-ignore
      onTemplateChange={handleFormChange}
      onSidebarTemplatesClick={onSidebarTemplatesClick}
      selectedChannel={getSelectedChannel()}
      onSave={onSave}
      templates={templates ? templates.templates : []}
      messageTemplates={templates ? templates.templates : []}
      onDuplicateForce={onDuplicateForce}
      onChangeWargameTitle={handleTitleChnage}
      onSaveGameTitle={handleSaveWargameTitle}
      onWargameInitiate={onWargameInitiate}
      iconUploadUrl={iconUploaderPath}
      customDeleteHandler={handleDeleteGameControl}
    />
  )
}

export default AdminGameSetup
