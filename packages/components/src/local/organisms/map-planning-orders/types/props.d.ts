import { ForceData, ForceStyle, MessageInteraction, MessagePlanning, PlanningActivity } from '@serge/custom-types'
import React from 'react'

export default interface PropTypes {
  /** the full set of orders */
  orders: MessagePlanning[]
  /** reference list of interactions */
  interactions?: MessageInteraction[]
  /** the currently selected set of ordres */
  selectedOrders?: string[]
  /** currently selected interaction */
  selectedInteraction?: string | undefined
  /** a reference list of plannign activiites (used to get color/styling) */
  activities: PlanningActivity[]
  /** handler for a set of orders being clicked */
  setSelectedOrders: React.Dispatch<React.SetStateAction<string[]>>
  /** default color to use for this force */
  forceColor?: ForceData['color']
  /** set of force colors */
  forceColors: ForceStyle[]
}
