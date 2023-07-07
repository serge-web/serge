import { UMPIRE_FORCE, UNKNOWN_TYPE } from '@serge/config'
import { ForceOption, ForceData } from 'src/custom-types'

/** Loops through all available forces and creates an entry for each one to be used as form data
 * @param {any} forces list of forces in wargame
 * @param {boolean} withUnknown whether to include unknown force
 * @param {boolean} excludeUmpire whether to exclude umpire force
 * @param {ForceData['uniqid'] | undefined} forceId own force Id - since we don't render own force. Undefined to not skip own force
 * @return {Array<SelectOption>} collection of name/color pairs
 */
const availableForces = (forces: ForceData[], withUnknown: boolean, excludeUmpire: boolean, forceId: ForceData['uniqid'] | undefined): Array<ForceOption> => {
  if (forces) {
    // skip umpire
    const nonUmpire: ForceData[] = excludeUmpire ? forces.filter((force: ForceData) => force.uniqid !== UMPIRE_FORCE) : forces

    // skip own force
    const skipOwn: ForceData[] = forceId ? nonUmpire.filter((force: ForceData) => force.uniqid !== forceId) : nonUmpire

    const res: ForceOption[] = skipOwn.map((force: ForceData): ForceOption => {
      return {
        colour: force.color,
        name: force.name,
        id: force.uniqid
      }
    })
    if (withUnknown) {
      res.push({ name: UNKNOWN_TYPE, colour: '#ccc', id: UNKNOWN_TYPE })
    }
    return res
  } else {
    return []
  }
}

export default availableForces
