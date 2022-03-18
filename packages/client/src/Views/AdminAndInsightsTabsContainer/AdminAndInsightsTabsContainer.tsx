import React, { useEffect, useMemo, useState } from 'react'
import { usePlayerUiState, usePlayerUiDispatch } from '../../Store/PlayerUi'
import { AdminPanelFooter } from '@serge/components'
import getByPassUrl from './helpers/getByPassUrl'
import addTabs from './helpers/addTabs'
import renameTab from './helpers/renameTab'
import factory from './helpers/factory'
import { FLEX_LAYOUT_MODEL_DEFAULT } from '../../consts'
import FlexLayout, { Model } from 'flexlayout-react'
import { showHideObjectives } from '../../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { setActivityTime } from '@serge/config'

const AdminAndInsightsTabsContainer = (): React.ReactElement => {
  const state = usePlayerUiState()
  const [byPassUrl] = useState<URL>(getByPassUrl(state))
  const [model] = useState<Model>(FlexLayout.Model.fromJson(FLEX_LAYOUT_MODEL_DEFAULT))
  const dispatch = usePlayerUiDispatch()
  const [tabLoadedStatus, setTabLoadedStatus] = useState<boolean>(false)
  const gameAdminTabId = 'Game Admin'
  const insightsTabId = 'Insights'
  const { selectedForce, selectedRoleName, feedbackMessages, chatChannel } = state

  const [gameAdmin, insights] = useMemo(() => {
    const feedbackUnreadMsgCount = feedbackMessages.filter(message => !message.hasBeenRead).length
    const adminUnreadMsgCount = chatChannel.messages.filter(message => !message.hasBeenRead).length
   
    return [`Game Admin${adminUnreadMsgCount ? ' ('+adminUnreadMsgCount+')' : ''}`, `Insights${feedbackUnreadMsgCount ? ' ('+feedbackUnreadMsgCount+')' : ''}`]
  }, [feedbackMessages, chatChannel.messages])

  if (selectedForce === undefined) throw new Error('selectedForce is undefined')

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
  }, [insights, gameAdmin])

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
        byPassUrl={byPassUrl.href}
        onIconClick={(): void => dispatch(showHideObjectives())}
      />
    </>
  );
}

export default AdminAndInsightsTabsContainer
