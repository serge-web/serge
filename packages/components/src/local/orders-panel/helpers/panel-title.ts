import { ADJUDICATION_PHASE, UMPIRE_FORCE } from '@serge/config'

/**
 * Displays the panel title depending on the selected force and phase
 * @param phase string
 * @param selectedForce string
 */

const panelTitle = (phase: string, selectedForce: string): string => {
  if (phase === ADJUDICATION_PHASE && selectedForce === UMPIRE_FORCE) {
    return 'State of World'
  } else {
    return 'Planning Orders'
  }
}

export default panelTitle
