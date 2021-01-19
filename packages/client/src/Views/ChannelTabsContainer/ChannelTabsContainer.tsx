import React, { useState, useEffect } from 'react'
import FlexLayout, { Model } from 'flexlayout-react'
import factory from './helpers/factory'
import computeTabs from './helpers/computeTabs'
import tabRender from './helpers/tabRender'
import { usePlayerUiState, usePlayerUiDispatch } from '../../Store/PlayerUi'
import { expiredStorage, LOCAL_STORAGE_TIMEOUT, FLEX_LAYOUT_MODEL_DEFAULT } from '../../consts'
import { getAllWargameMessages } from '../../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import Props from './types'

const ChannelTabsContainer: React.FC<Props> = ({ rootRef }): React.ReactElement => {
  const state = usePlayerUiState()
  const dispatch = usePlayerUiDispatch()
  const { selectedForce } = state
  if (selectedForce === undefined) throw new Error('selectedForce is undefined')

  const [modelName] = useState(`FlexLayout-model-${state.currentWargame}-${selectedForce.uniqid}-${state.selectedRole}`)

  const getModel = ():Model => {
    let model = expiredStorage.getItem(modelName)
    if (model) return FlexLayout.Model.fromJson(JSON.parse(model))
    return FlexLayout.Model.fromJson(FLEX_LAYOUT_MODEL_DEFAULT)
  }

  const [model] = useState<Model>(getModel())

  useEffect(() => {
    getAllWargameMessages(state.currentWargame)(dispatch)
  }, [])

  useEffect(() => {
    computeTabs(state, model)
  }, [state])

  return (
    <div className='contain-channel-tabs' data-force={selectedForce.uniqid} ref={rootRef}>
      <FlexLayout.Layout
        model={model}
        factory={factory(state)}
        onRenderTab={tabRender(state)}
        onModelChange={() => {
          expiredStorage.setItem(modelName, JSON.stringify(model.toJson()), LOCAL_STORAGE_TIMEOUT)
        }}
      />
    </div>
  )
}

export default ChannelTabsContainer
