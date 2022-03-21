import React, { useEffect, useMemo, useState } from 'react'
import { usePlayerUiState, usePlayerUiDispatch } from '../../Store/PlayerUi'
import { AdminPanelFooter } from '@serge/components'
import getByPassUrl from './helpers/getByPassUrl'
import addTabs from './helpers/addTabs'
import factory from './helpers/factory'
import { FLEX_LAYOUT_MODEL_DEFAULT } from '../../consts'
import FlexLayout, { Model } from 'flexlayout-react'
import { showHideObjectives } from '../../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { setActivityTime } from '@serge/config'
import { isMessageReaded } from '@serge/helpers'
import renameTab from './helpers/renameTab'

const AdminAndInsightsTabsContainer = (): React.ReactElement => {
  const state = usePlayerUiState()
  const [byPassUrl] = useState<URL>(getByPassUrl(state))
  const [model] = useState<Model>(FlexLayout.Model.fromJson(FLEX_LAYOUT_MODEL_DEFAULT))
  const [tabLoadedStatus, setTabLoadedStatus] = useState<boolean>(false)
  const gameAdminTabId = 'Game Admin'
  const insightsTabId = 'Insights'
  const dispatch = usePlayerUiDispatch()
  const { selectedForce, selectedRoleName } = state
  if (selectedForce === undefined) throw new Error('selectedForce is undefined')

  const [gameAdmin, insights] = useMemo(() => {
    const selectedForceId = state.selectedForce ? state.selectedForce.uniqid : ''
    const feedbackMsgUnreadCount = state.feedbackMessages.filter(msg => !isMessageReaded(state.currentWargame, selectedForceId, state.selectedRole, msg._id)).length
    const adminMsgUnreadCount = state.chatChannel.messages.filter(msg => !isMessageReaded(state.currentWargame, selectedForceId, state.selectedRole, msg._id || '')).length

    return [`Game Admin${adminMsgUnreadCount > 0 ? ' (' + adminMsgUnreadCount + ')' : ''}`, `Insights${feedbackMsgUnreadCount > 0 ? ' (' + feedbackMsgUnreadCount + ')' : ''}`]
  }, [state.feedbackMessages, state.chatChannel.messages])

  useEffect(() => {
    if (!tabLoadedStatus) {
      if (state.isInsightViewer) {
        addTabs(model, insightsTabId, insights)
      }
      addTabs(model, gameAdminTabId, gameAdmin)
      setActivityTime(state.selectedRole, 'Logged in')
      setTabLoadedStatus(true)
    } else {
      if (state.isInsightViewer) {
        renameTab(model, insightsTabId, insights)
      }
      renameTab(model, gameAdminTabId, gameAdmin)
    }
  }, [gameAdmin, insights])

  return (
    <>
      <FlexLayout.Layout
        model={model}
        factory={factory(gameAdmin, insights)}
        classNameMapper={defaultClassName => `${defaultClassName} ${defaultClassName}--undo-transparent`}
      />
      <AdminPanelFooter
        force={selectedForce}
        selectedRoleName={selectedRoleName}
        byPassUrl={byPassUrl}
        onIconClick={(): void => dispatch(showHideObjectives())}
      />
    </>
  );
}

export default AdminAndInsightsTabsContainer
