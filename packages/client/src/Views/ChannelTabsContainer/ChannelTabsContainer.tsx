import React, { useState, useEffect } from 'react'
import FlexLayout, { Model } from 'flexlayout-react'
import factory from './helpers/factory'
import computeTabs from './helpers/computeTabs'
import tabRender from './helpers/tabRender'
import { usePlayerUiState, usePlayerUiDispatch } from '../../Store/PlayerUi'
import { expiredStorage, LOCAL_STORAGE_TIMEOUT } from '../../consts'
import { getAllWargameMessages } from '../../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import _ from 'lodash'
import Props from './types'

const json = {
  global: {
    tabSetTabStripHeight: 45,
    tabEnableClose: false,
    tabEnableRenderOnDemand: false,
  },
  borders: [],
  layout:{
    'type': 'row',
    'weight': 100,
    'children': [
    ]
  }
}

const ChannelTabsContainer: React.FC<Props> = (): React.ReactElement => {
  const state = usePlayerUiState()
  const dispatch = usePlayerUiDispatch()

  // TODO: why it's in state?
  const [modelName] = useState(`FlexLayout-model-${state.currentWargame}-${state.selectedForce}-${state.selectedRole}`)

  useEffect(() => {
    getAllWargameMessages(state.currentWargame)(dispatch)
  }, [])

  useEffect(() => {
    computeTabs(state, getModel())
  }, [state])

  const getModel = ():Model => {
    let model = expiredStorage.getItem(modelName)
    if (model) FlexLayout.Model.fromJson(JSON.parse(model))
    return FlexLayout.Model.fromJson(json)
  }

  const force = state.allForces.find((force) => force.uniqid === state.selectedForce)
  if (!force) return <div/>

  const model = getModel()

  return (
    <div className='contain-channel-tabs' data-force={force.uniqid}>
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
