import Perception from './perception'
import PlannedTurn from './planned-turn'

export interface Asset {
  name: string,
  uniqid: string,
  position: string,
  perceptions: Perception[],
  plannedTurns?: PlannedTurn[]
}

export default Asset
