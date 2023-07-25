// import FlexLayout, { Model } from 'flexlayout-react'
import * as FlexLayout from 'flexlayout-react'

export default (model: FlexLayout.Model, nodeId: string, count: number): void => {
  let className = 'unread-9plus'
  if (count > 0 && count <= 8) {
    className = `unread-${count}`
  } else if (count > 8) {
    className = 'unread-9plus'
  }
  try {
    model.doAction(FlexLayout.Actions.updateNodeAttributes(nodeId, { className }))
    // Expected output: ReferenceError: nonExistentFunction is not defined
    // (Note: the exact output may be browser-dependent)
  } catch (error) {
    console.error(error)
  }
}
