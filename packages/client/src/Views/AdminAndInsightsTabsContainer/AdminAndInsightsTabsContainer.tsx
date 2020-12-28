import React, { useEffect, useState } from 'react'
import { usePlayerUiState, usePlayerUiDispatch } from '../../Store/PlayerUi'
import { AdminPanelFooter } from '@serge/components'
import getByPassUrl from './helpers/getByPassUrl'
import addTabs from './helpers/addTabs'
import factory from './helpers/factory'
import json from './helpers/json'
import FlexLayout, { Model } from 'flexlayout-react'
import { showHideObjectives } from '../../ActionsAndReducers/playerUi/playerUi_ActionCreators'


const AdminAndInsightsTabsContainer = (): React.ReactElement => {
  const state = usePlayerUiState()
  const [byPassUrl] = useState<URL>(getByPassUrl(state))
  const [model] = useState<Model>(FlexLayout.Model.fromJson(json))
  const gameAdmin = 'Game Admin'
  const gameAdminTitle = 'Social Media'
  const insights = 'Insights'
  const dispatch = usePlayerUiDispatch()

  useEffect(() => {
    addTabs(state, model, gameAdmin, gameAdminTitle, insights)
  }, [])

  const force = state.allForces.find((force) => force.uniqid === state.selectedForce)

  return (
    <>
      <FlexLayout.Layout
        model={model}
        factory={factory(gameAdminTitle, insights)}
        classNameMapper={defaultClassName => `${defaultClassName} ${defaultClassName}--undo-transparent`}
      />
      <AdminPanelFooter
        force={force}
        selectedRole={state.selectedRole}
        byPassUrl={byPassUrl}
        onIconClick={(): void => dispatch(showHideObjectives())}
      />
    </>
  );
}

export default AdminAndInsightsTabsContainer
