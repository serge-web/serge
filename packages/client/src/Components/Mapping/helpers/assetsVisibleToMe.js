/** provide a list of the assets that are currently visible to me
 * i.e. either from my Force, or currently visible (has a perception entry for my force)
 * Oh, or all forces if I'm white force
 */
export default function assetsVisibleToMe (/* object */ allForces, /* string */ myForce) {
  const res = []
  allForces.forEach(force => {
    force.asset.forEach(asset => {
      if (myForce === 'White') {
        // ok, white force I see all
        res.push(asset)
      } else if (asset.force === myForce) {
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
  })
  return res
}