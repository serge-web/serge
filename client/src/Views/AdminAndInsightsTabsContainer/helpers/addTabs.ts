import { Model, DockLocation, Actions } from 'flexlayout-react'
export default (model: Model, tabId: string, tabName: string): void => {
  model.doAction(
    Actions.addNode({
      type: 'tab',
      component: tabName,
      name: tabName,
      id: tabId
    }, '#2', DockLocation.CENTER, -1)
  )

  // After adding the tab, you can check if it exists in the model
  const tabNode = model.getNodeById(tabId)
  if (!tabNode) {
    console.log(`Tab with id ${tabId} was not added.`)
  } 
}
