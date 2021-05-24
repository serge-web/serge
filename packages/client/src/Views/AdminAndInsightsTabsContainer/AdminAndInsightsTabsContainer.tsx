import React, { useEffect, useState } from 'react'
import { usePlayerUiState, usePlayerUiDispatch } from '../../Store/PlayerUi'
import { AdminPanelFooter } from '@serge/components'
import getByPassUrl from './helpers/getByPassUrl'
import addTabs from './helpers/addTabs'
import factory from './helpers/factory'
import { FLEX_LAYOUT_MODEL_DEFAULT } from '../../consts'
import FlexLayout, { IJsonModel, Model } from 'flexlayout-react'
import { showHideObjectives } from '../../ActionsAndReducers/playerUi/playerUi_ActionCreators'


const AdminAndInsightsTabsContainer = (): React.ReactElement => {
  const state = usePlayerUiState()
  const [byPassUrl] = useState<URL>(getByPassUrl(state))
  const [model] = useState<Model>(FlexLayout.Model.fromJson(FLEX_LAYOUT_MODEL_DEFAULT as IJsonModel))
  const gameAdmin = 'Game Admin'
  const gameAdminTitle = 'Game Admin'
  const insights = 'Insights'
  const dispatch = usePlayerUiDispatch()
  const { selectedForce } = state
  if (selectedForce === undefined) throw new Error('selectedForce is undefined')

  useEffect(() => {
    addTabs(state, model, gameAdmin, gameAdminTitle, insights)
  }, [])

  return (
    <>
      <FlexLayout.Layout
        model={model}
        factory={factory(gameAdminTitle, insights)}
        classNameMapper={defaultClassName => `${defaultClassName} ${defaultClassName}--undo-transparent`}
      />
      <AdminPanelFooter
        force={selectedForce}
        selectedRole={state.selectedRole}
        byPassUrl={byPassUrl}
        onIconClick={(): void => dispatch(showHideObjectives())}
      />
    </>
  );
}

export default AdminAndInsightsTabsContainer
