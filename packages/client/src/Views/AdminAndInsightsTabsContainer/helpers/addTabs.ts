import FlexLayout, { Model } from 'flexlayout-react'

export default (model: Model, tabId: string, tabName: string): void => {
  model.doAction(
    FlexLayout.Actions.addNode({
      type: 'tab',
      component: tabName,
      name: tabName,
      id: tabId
    }, '#2', FlexLayout.DockLocation.CENTER, -1)
  )

}
