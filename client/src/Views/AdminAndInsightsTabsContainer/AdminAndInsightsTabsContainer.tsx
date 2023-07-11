/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useState } from 'react'
import { usePlayerUiState, usePlayerUiDispatch } from '../../Store/PlayerUi'
import { AdminPanelFooter } from '@serge/components'
import getByPassUrl from './helpers/getByPassUrl'
import addTabs from './helpers/addTabs'
import factory from './helpers/factory'
import { FLEX_LAYOUT_MODEL_DEFAULT } from '../../consts'
import * as FlexLayout from 'flexlayout-react'
import { useDispatch } from 'react-redux'
import { showHideObjectives } from '../../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { saveNewActivityTimeMessage } from '../../ActionsAndReducers/PlayerLog/PlayerLog_ActionCreators'
import { isMessageReaded } from 'src/Helpers'
import addUnreadMsgCount from './helpers/renameTab'

const AdminAndInsightsTabsContainer = (): React.ReactElement => {
  const state = usePlayerUiState()
  const [byPassUrl] = useState<URL>(getByPassUrl(state))
  const playerUiDispatch = usePlayerUiDispatch()
  const dispatch = useDispatch()

  const adminInsightsModel = FLEX_LAYOUT_MODEL_DEFAULT
  adminInsightsModel.global['tabSetEnableMaximize'] = false
  adminInsightsModel.global['tabSetTabStripHeight'] = 35
  const [model] = useState<FlexLayout.Model>(FlexLayout.Model.fromJson(adminInsightsModel))
  const [tabLoadedStatus, setTabLoadedStatus] = useState<boolean>(false)
  const gameAdminTabId = 'Game Admin'
  const gameAdminTab = 'Game Admin'
  const insightsTabId = 'Insights'
  const insightsTab = 'Insights'
  const { selectedForce, selectedRoleName } = state
  if (selectedForce === undefined) throw new Error('selectedForce is undefined')

  const [feedbackMsgCount, adminMsgCount] = useMemo(() => {
    const selectedForceId = state.selectedForce ? state.selectedForce.uniqid : ''
    const feedbackMsgUnreadCount = state.feedbackMessages.filter(msg => !isMessageReaded(state.currentWargame, selectedForceId, state.selectedRole, msg._id)).length
    const adminMsgUnreadCount = state.chatChannel.messages.filter(msg => !isMessageReaded(state.currentWargame, selectedForceId, state.selectedRole, msg._id || '')).length

    return [feedbackMsgUnreadCount, adminMsgUnreadCount]
  }, [state.feedbackMessages, state.chatChannel.messages])

  console.log('model', model)

  useEffect(() => {
    console.log('model', model)
    if (!tabLoadedStatus) {
      if (state.isInsightViewer) {
        addTabs(model, insightsTabId, insightsTab)
      }
      addTabs(model, gameAdminTabId, gameAdminTab)
      saveNewActivityTimeMessage(state.selectedRole, { aType: 'Logged in' }, state.currentWargame)(dispatch)
      setTabLoadedStatus(true)
    } else {
      if (state.isInsightViewer) {
        addUnreadMsgCount(model, insightsTabId, feedbackMsgCount)
      }
      addUnreadMsgCount(model, gameAdminTabId, adminMsgCount)
    }
  }, [feedbackMsgCount, adminMsgCount])

  return (
    <>
      <FlexLayout.Layout
        model={model}
        factory={factory(gameAdminTab, insightsTab)}
        classNameMapper={defaultClassName => `${defaultClassName} ${defaultClassName}--undo-transparent ${defaultClassName}--fullWidth ${defaultClassName}--admin-insights-tab-btn`}
      />
      
      <AdminPanelFooter
        force={selectedForce}
        selectedRoleName={selectedRoleName}
        byPassUrl={byPassUrl}
        onIconClick={(): void => playerUiDispatch(showHideObjectives())}
      />
     
    </>
  )
}

export default AdminAndInsightsTabsContainer
