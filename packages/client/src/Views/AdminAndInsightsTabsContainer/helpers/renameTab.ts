import FlexLayout, { Model } from 'flexlayout-react'

export default (model: Model, nodeId: string, count: number): void => {
  let className = ''
  if (count > 0 && count <= 8) {
    className = `unread-${count}`
  } else if (count > 8) {
    className = `unread-9plus`
  }
  model.doAction(FlexLayout.Actions.updateNodeAttributes(nodeId, { className }))
}