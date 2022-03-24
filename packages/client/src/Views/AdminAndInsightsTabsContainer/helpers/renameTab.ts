import FlexLayout, { Model } from 'flexlayout-react'

export default (model: Model, nodeId: string, count: number): void => {
  if (count === 0) {
    return model.doAction(FlexLayout.Actions.updateNodeAttributes(nodeId, { className: '' }))
  }
  model.doAction(FlexLayout.Actions.updateNodeAttributes(nodeId, { className: `unread-${count}` }))
}