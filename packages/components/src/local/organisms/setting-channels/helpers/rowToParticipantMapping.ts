import { ForceData, Role } from '@serge/custom-types'
import { ParticipantMapping } from '@serge/custom-types/participant'
import { SelectItem } from 'src/local/molecules/editable-row/types/props'
import { EDITABLE_SELECT_ITEM, Item } from '../../../molecules/editable-row'

/** check if it's safe to save this row */
export const checkForSaveProblems = (nextItems: Array<Item>): string | undefined => {
  const [forces, access, controls] = nextItems.filter(item => item.type === EDITABLE_SELECT_ITEM) as SelectItem[]
  if (!forces) {
    // dummy line of code to avoid compiler warning about forces declared but not used
    console.log('dummy')
  }
  // is this participation controlling something?
  if (controls.active && controls.active.length > 0) {
    if (!access.active || access.active.length === 0) {
      // there zero roles, provided, but one must be
      return 'Role must be provided when asset control specified'
    } else if (access.active.length > 1) {
      // there is more than one role specified, we can't allow that
      return 'Only one role can be specified if controlling assets'
    }
  }
  return undefined
}

// Convert table row items to Participant object
export default (forces: Array<ForceData>, nextItems: Array<Item>, participant: ParticipantMapping): ParticipantMapping => {
  // get firs 3 table select items
  const [force, access, controls] = nextItems.filter(item => item.type === EDITABLE_SELECT_ITEM) as SelectItem[]

  // get selected force(s) if there is no selected forces get first force as selected
  const selectedForce = forces[force.active ? force.active[0] : 0]
  // get selected rpoes
  const roles: Array<Role['roleId']> = access.active ? access.active.map((key: number) => (
    selectedForce.roles[key].roleId
  )) : []

  // find who the control is controlling
  const selectedControls = controls.active
  const options = controls.options
  const controlsValues: Array<string> | undefined = selectedControls ? selectedControls.map((key: number) => {
    return options[key].uniqid
  }) : []

  return {
    ...participant,
    force: selectedForce.name,
    forceUniqid: selectedForce.uniqid,
    roles,
    controls: controlsValues
  }
}
