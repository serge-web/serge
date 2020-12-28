import FlexLayout, { Model } from 'flexlayout-react'
import { PlayerUi } from '@serge/custom-types'

export default (state: PlayerUi, model: Model, gameAdmin: string, gameAdminTitle: string, insights: string): void => {
  model.doAction(
    FlexLayout.Actions.addNode({
      type: 'tab',
      component: gameAdmin,
      name: gameAdminTitle,
      id: gameAdmin
    }, '#2', FlexLayout.DockLocation.CENTER, -1)
  )

  if (state.isInsightViewer) {
    model.doAction(
      FlexLayout.Actions.addNode({
        type: 'tab',
        component: insights,
        name: insights,
        id: insights
      }, '#2', FlexLayout.DockLocation.CENTER, -1)
    )
  }
}
