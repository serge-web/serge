import { ForceData, MessagePlanning, PlanningActivity } from '@serge/custom-types'
import React from 'react'

export default interface PropTypes {
  /** the set of orders to display */
  orders: MessagePlanning[]
  /** a reference list of plannign activiites (used to get color/styling) */
  activities: PlanningActivity[]
  /** handler for a set of orders being clicked */
  setSelectedOrders: React.Dispatch<React.SetStateAction<string[]>>
  /** default color to use for this force */
  forceColor?: ForceData['color']
}
