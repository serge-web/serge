import { OrderRow } from '../../planning-assets/types/props'

export default interface PropTypes {
  /** the set of orders to display */
  orders: OrderRow[]
  /** a reference list of plannign activiites (used to get color/styling) */
  activities: PlanningActivity[]
  /** handler for a set of orders being clicked */
  setSelectedOrders: React.Dispatch<React.SetStateAction<string[]>>
  /** default color to use for this force */
  forceColor?: ForceData['color']
}
