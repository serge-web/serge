import { PlayerUi } from '@serge/custom-types'
import * as FlexLayout from 'flexlayout-react'
import _ from 'lodash'

interface ModelLoc extends FlexLayout.Model {
  _idMap: {[property: string]: FlexLayout.TabNode | FlexLayout.TabSetNode}
}

interface TabMapped {
  id: string,
  name: string
}

const getModelTabs = (model: ModelLoc): TabMapped[] => {
  const modelValues = Object.values(model._idMap)
  const tabs = modelValues.filter((node) => node.getType() === 'tab')
  const tabsets = modelValues.filter((node) => node.getType() === 'tabset')
  // @ts-ignore
  const contents = tabs.length ? tabs : tabsets.length && tabsets.children && tabsets.children.length ? tabsets.children : []
  return contents.map((node: FlexLayout.TabNode) => ({ id: node.getId(), name: node.getName() }))
}

const computeTabs = (state: PlayerUi, modelOrig: FlexLayout.Model): void => {
  const { channels } = state
  const channelNames = []
  const model = modelOrig as ModelLoc

  for (const channelId in channels) {
    channelNames.push({
      id: channelId, name: channels[channelId].name
    })
  }

  const modelTabs = getModelTabs(model)
  const newChannels = _.differenceBy(channelNames, modelTabs, (channel) => channel.id)
  const channelsToRemove = _.differenceBy(modelTabs, channelNames, (channel) => channel.id)
  const matchingChannels = _.intersectionBy(channelNames, modelTabs, (item) => item.id)
  const channelsToRename: TabMapped[] = _.differenceBy(matchingChannels, modelTabs, (item) => item.name)

  if (channelsToRename.length > 0) {
    renameTabs(channelsToRename, model)
  }

  if (newChannels.length > 0) {
    addToTabs(newChannels, model)
  }

  if (channelsToRemove.length > 0) {
    removeFromTabs(channelsToRemove, model)
  }
}

const renameTabs = (nameChanges: TabMapped[], model: ModelLoc): void => {
  nameChanges.forEach((channel) => {
    model.doAction(
      FlexLayout.Actions.updateNodeAttributes(channel.id, { name: channel.name })
    )
  })
}

const addToTabs = (newChannels: TabMapped[], model: ModelLoc) => {
  const modelTabs = Object.values(model._idMap)
  const tabsetMatch = modelTabs.find(tab => tab.getType() === 'tabset')
  if (tabsetMatch !== undefined) {
    const tabsetId = tabsetMatch.getId()
    newChannels.forEach((channel) => {
      if (!model._idMap[channel.id]) {
        model.doAction(
          FlexLayout.Actions.addNode({
            type: 'tab',
            component: channel.name,
            name: channel.name,
            id: channel.id
          }, tabsetId, FlexLayout.DockLocation.CENTER, -1))
      }
    })
  }
}

const removeFromTabs = (channelsToRemove: TabMapped[], model: ModelLoc) => {
  console.log('FlexLayout', FlexLayout)
  channelsToRemove.forEach(channel => {
    if (model.getNodeById(channel.id)) { model.doAction(FlexLayout.Actions.deleteTab(channel.id)) }
  })
  const modelTabs = getModelTabs(model)

  if (modelTabs.length === 0) addToTabs([{ id: 'default', name: 'No subscriptions' }], model)
}

export default computeTabs
