import { ColorOption } from '@serge/custom-types'

/** Loops through all available forces and creates an entry for each one to be used as form data
 * @param {any} forces list of forces in wargame
 * @param {boolean} withUnknown whether to include unknown force
 * @return {Array<ColorOption>} collection of name/color pairs
 */
const availableForces = (forces: any, withUnknown: boolean): Array<ColorOption> =>
{
  if(forces) {
    const res = forces.map((force: any) => {
      return {
        colour: force.color,
        name: force.name
      }
    })
    if(withUnknown) {
      res.push({ name: 'Unknown', colour: '#ccc' })
    }
    return res
  } else {
    return []
  }
}

export default availableForces
