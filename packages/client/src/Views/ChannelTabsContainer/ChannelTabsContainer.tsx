import React, { useState, useEffect } from 'react'
import FlexLayout, { Model, Node, RowNode, TabSetNode } from 'flexlayout-react'
import { ChannelData } from '@serge/custom-types'
import factory from './helpers/factory'
import computeTabs from './helpers/computeTabs'
import tabRender from './helpers/tabRender'
import Loader from '../../Components/Loader'
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
      console.log('=> tabset: ', tabset)
      return {
        type: 'tabset',
        weight: 50,
        children: tabChildren(tabset)
      }
    })
    console.log('=> children: ', children)
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
      updateTabTransparency()
    }
  }, [state, wargamesLoaded])

  const updateTabTransparency = () => {
    const maximizeTabset = model.getMaximizedTabset()
    if (!maximizeTabset) return
    model.visitNodes((node, lv) => {
      // console.log('=> node: ', node)
      if (node instanceof RowNode && lv === 1) {
        const childNodes: Node[] = node.getChildren()
        for (const childNode of childNodes) {
          if (childNode instanceof TabSetNode) {
            const tabSetNode = childNode as TabSetNode
            if (!tabSetNode.isMaximized()) {
              console.log('=> tab behind maximize: ', tabSetNode.getId())
              // tabSetNode.getModel().doAction(FlexLayout.Actions.updateNodeAttributes(tabSetNode.getId(), { classNames: 'hide-tab' }))
            } else {
              console.log('=> tab maximize: ', tabSetNode.getId())
            }
          }
        }
      }
    })
  }

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
                updateTabTransparency()
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
