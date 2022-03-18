import FlexLayout, { Model } from 'flexlayout-react'

enum NodeType {
  TAB = 'tab'
}

export default (model: Model, tabId: string, tabName: string): void => {
  model.doAction(
    FlexLayout.Actions.addNode({
      type: NodeType.TAB,
      component: tabName,
      name: tabName,
      id: tabId
    }, '#2', FlexLayout.DockLocation.CENTER, -1)
  )

}
