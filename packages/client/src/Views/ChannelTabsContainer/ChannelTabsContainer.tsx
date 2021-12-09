import React, { useState, useEffect } from 'react'
import FlexLayout, { Model } from 'flexlayout-react'
import { ChannelData } from '@serge/custom-types'
import factory from './helpers/factory'
import computeTabs from './helpers/computeTabs'
import tabRender from './helpers/tabRender'
import Loader from '../../Components/Loader'
import { usePlayerUiState, usePlayerUiDispatch } from '../../Store/PlayerUi'
import { expiredStorage, LOCAL_STORAGE_TIMEOUT, FLEX_LAYOUT_MODEL_DEFAULT } from '../../consts'
import { getAllWargameMessages } from '../../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import Props from './types'

interface UnreadCounter {
  [property: string]: number
}


const ChannelTabsContainer: React.FC<Props> = ({ rootRef }): React.ReactElement => {
  const state = usePlayerUiState()
  const dispatch = usePlayerUiDispatch()
  const { selectedForce } = state
  if (selectedForce === undefined) throw new Error('selectedForce is undefined')


  const [modelName] = useState(`FlexLayout-model-${state.currentWargame}-${selectedForce.uniqid}-${state.selectedRole}`)
  const setDefaultModel = () => {
    const { allChannels } = state
    const hasMap = allChannels.find(({ name }) => name.toLowerCase() === 'mapping')
    const setTabContent = (channel: ChannelData) => ({
      type: 'tab',
      id: channel.uniqid,
      name: channel.name,
      component: channel.name,
      className: ''
    })
    if (allChannels.length <= 1 || hasMap) {
      return {
        ...FLEX_LAYOUT_MODEL_DEFAULT,
        layout: {
          type: 'row',
          children: [{
            type: 'tabset',
            children: allChannels.map(setTabContent)
          }]
        }
      }
    }

    const chunks = [...allChannels]
    const chunkSize = 2
    const firstSet = chunks.splice(0, Math.round(chunks.length / chunkSize))
    const tabChildren = (id: Number) => {
      const collections = id === 0 ? firstSet : chunks
      return collections.map(setTabContent)
    }
    const children = Array.from(Array(chunkSize).keys()).map(tabset => {
      return {
        type: 'tabset',
        weight: 50,
        children: tabChildren(tabset)
      }
    })
    return {
      ...FLEX_LAYOUT_MODEL_DEFAULT,
      layout: {
        type: 'row',
        children
      }
    }
  }

  const getModel = (): Model => {
    let model = expiredStorage.getItem(modelName)
    if (model) return FlexLayout.Model.fromJson(JSON.parse(model))
    return FlexLayout.Model.fromJson(setDefaultModel())
  }

  const [model] = useState<Model>(getModel())
  const [wargamesLoaded, setWargamesLoaded] = useState(false)
  const initialize = async () => {
    await getAllWargameMessages(state.currentWargame)(dispatch)
    if (!wargamesLoaded) {
      setWargamesLoaded(true)
    }
  }

  useEffect(() => {
    initialize()
  }, [])

  useEffect(() => {
    if (wargamesLoaded) {
      computeTabs(state, model)
    }
  }, [state, wargamesLoaded])

  return (
    <div className='contain-channel-tabs' data-force={selectedForce.uniqid} ref={rootRef}>
      {
        wargamesLoaded
          ? (
            <FlexLayout.Layout
              model={model}
              factory={factory(state)}
              onRenderTab={tabRender(state)}
              onModelChange={() => {
                expiredStorage.setItem(modelName, JSON.stringify(model.toJson()), LOCAL_STORAGE_TIMEOUT)
              }}
            />
          )
          : <Loader />
      }
    </div>
  )
}

export default ChannelTabsContainer
