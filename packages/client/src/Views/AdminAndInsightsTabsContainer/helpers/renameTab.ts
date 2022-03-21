import FlexLayout, { Model } from 'flexlayout-react'

export default (model: Model, nodeId: string, name: string): void => {
  model.doAction(
    FlexLayout.Actions.renameTab(nodeId, name)
  )
}