import { ADJUDICATION_PHASE, UMPIRE_FORCE } from '@serge/config'

/** only show the orders panel if we're umpire in adjudication, or anyone in planning phase */
const showOrders = (phase: string, selectedForce: string, turn: number): boolean => {
  if (phase === ADJUDICATION_PHASE) {
    return selectedForce === UMPIRE_FORCE && turn !== 0
  } else {
    return true
  }
}

export default showOrders
