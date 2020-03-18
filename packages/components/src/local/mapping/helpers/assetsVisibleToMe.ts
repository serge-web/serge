// TODO: Unsure what to do about consts yet so I'm going to revisit this later.
import { UMPIRE_FORCE } from '../../../consts'

/** provide a list of the assets that are currently visible to me
 * i.e. either from my Force, or currently visible (has a perception entry for my force)
 * Oh, or all forces if I'm white force
 */
const assetsVisibleToMe = (allForces: Array<any>, myForce: string): any => allForces.forEach(force =>
  force?.assets?.map((asset: any) => {
    if (myForce === UMPIRE_FORCE) {
      // ok, white force I see all
      return asset
    } else if (force.name === myForce) {
      // ok, I know where my assets are
      return asset
    } else {
      const perceptions = asset.perceptions
      // do we have perceptions defined?
      if (perceptions) {
        // am I one of the perceptions?
        if (perceptions[myForce]) {
          return asset
        }
      }
    }
  })
)

export default assetsVisibleToMe
