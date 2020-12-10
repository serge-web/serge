import Perception from './perception'

export interface Asset {
  name: string,
  uniqid: string,
  position: number,
  perceptions: Perception[],
  plannedTurns?: any[] // Todo Create type for plannedTurns
}

export default Asset
