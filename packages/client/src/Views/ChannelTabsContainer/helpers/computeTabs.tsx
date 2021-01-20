import { PlayerUi } from '@serge/custom-types'
import FlexLayout, { Model, TabNode } from 'flexlayout-react'
import _ from 'lodash'

interface ModelLoc extends Model {
  _idMap: {[property: string]: TabNode}
}

interface TabMapped {
  id: string,
  name: string
}

const computeTabs = (state: PlayerUi, modelOrig: Model): void => {
  const { channels } = state
  const channelNames = []
  const model = modelOrig as ModelLoc

  for (let channelId in channels) {
    channelNames.push({
      id: channelId, name: channels[channelId].name
    })
  }

  let modelTabs = Object.values(model._idMap)
    .filter((node: TabNode) => node.getType() === 'tab')
    .map((node: TabNode) => ({ id: node.getId(), name: node.getName() }))

  let newChannels = _.differenceBy(channelNames, modelTabs, (channel) => channel.id)
  let channelsToRemove = _.differenceBy(modelTabs, channelNames, (channel) => channel.id)
  let matchingChannels = _.intersectionBy(channelNames, modelTabs, (item) => item.id)
  let channelsToRename: TabMapped[] = _.differenceBy(matchingChannels, modelTabs, (item) => item.name)

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
  let modelTabs = Object.values(model._idMap)
  let tabsetMatch = modelTabs.find(tab => tab.getType() === 'tabset')
  if (tabsetMatch !== undefined) {
    let tabsetId = tabsetMatch.getId()
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
  channelsToRemove.forEach(channel => {
    if (model.getNodeById(channel.id))
      model.doAction(FlexLayout.Actions.deleteTab(channel.id))
  })

  let modelTabs: TabMapped[] = Object.values(model._idMap)
    .filter((node) => node.getType() === 'tab')
    .map((node) => ({ id: node.getId(), name: node.getName() }))

  if (modelTabs.length === 0) addToTabs([{id: 'default', name: 'No subscriptions'}], model)
}

export default computeTabs
