import { OrderRow } from '../../planning-assets/types/props'

export default interface PropTypes {
  orders: OrderRow[]
  activities: PlanningActivity[]
  setSelectedOrders: React.Dispatch<React.SetStateAction<string[]>>
}
