import { UMPIRE_FORCE } from '../../../consts'

/** provide a list of the assets that are currently visible to me
 * i.e. either from my Force, or currently visible (has a perception entry for my force)
 * Oh, or all forces if I'm white force
 */
export default function assetsVisibleToMe (/* object */ allForces, /* string */ myForce) {
  const res = []
  allForces.forEach(force => {
    if (force.assets) {
      force.assets.forEach(asset => {
        if (myForce === UMPIRE_FORCE) {
          // ok, white force I see all
          res.push(asset)
        } else if (force.name === myForce) {
          // ok, I know where my assets are
          res.push(asset)
        } else {
          const perceptions = asset.perceptions
          // do we have perceptions defined?
          if (perceptions) {
            // am I one of the perceptions?
            if (perceptions[myForce]) {
              res.push(asset)
            }
          }
        }
      })
    }
  })
  return res
}
