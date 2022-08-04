import { setActivityTime } from '@serge/config'
import { ChannelTypes } from '@serge/custom-types'
import FlexLayout, { Model, TabNode } from 'flexlayout-react'
import React, { useEffect, useRef, useState } from 'react'
import { getAllWargameMessages } from '../../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import Loader from '../../Components/Loader'
import { expiredStorage, FLEX_LAYOUT_MODEL_DEFAULT, LOCAL_STORAGE_TIMEOUT } from '../../consts'
import { usePlayerUiDispatch, usePlayerUiState } from '../../Store/PlayerUi'
import computeTabs from './helpers/computeTabs'
import factory from './helpers/factory'
import tabRender from './helpers/tabRender'
import Props from './types'

const ChannelTabsContainer: React.FC<Props> = ({ rootRef, onTabChange }): React.ReactElement => {
  const state = usePlayerUiState()
  const dispatch = usePlayerUiDispatch()
  const { selectedForce } = state
  if (selectedForce === undefined) throw new Error('selectedForce is undefined')

  const [modelName] = useState(`FlexLayout-model-${state.currentWargame}-${selectedForce.uniqid}-${state.selectedRole}`)
  const [allowTabChangeEvent, setAllowTabChangeEvent] = useState<boolean>(false)
  const selectedNode = useRef<TabNode>()

  const setDefaultModel = () => {
    const { allChannels } = state
    const hasMap = allChannels.find(({ name }) => name.toLowerCase() === 'mapping')
    const setTabContent = (channel: ChannelTypes) => ({
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
    const model = expiredStorage.getItem(modelName)
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

  useEffect(() => {
    if (allowTabChangeEvent && selectedNode.current) {
      onTabChange(selectedNode.current)
      setAllowTabChangeEvent(false)
    }
  }, [allowTabChangeEvent])

  const onRenderTab = (node: TabNode) => {
    tabRender(state)(node)
    if (node.isVisible()) {
      selectedNode.current = node
    }
  }

  return (
    <div className='contain-channel-tabs' data-force={selectedForce.uniqid} ref={rootRef}>
      {
        wargamesLoaded
          ? (
            <FlexLayout.Layout
              model={model}
              factory={factory(state)}
              onRenderTab={onRenderTab}
              onModelChange={() => {
                setAllowTabChangeEvent(true)
                setActivityTime(state.selectedRole, 'change tab')
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
