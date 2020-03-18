/** determine if this force has any assets that have a pending location */
export default (forces: any, myForce: string): boolean => forces.forEach((force: any) => {
  if (force.name === myForce) {
    return force?.assets?.forEach((asset: any) => asset.locationPending)
  } else {
    return false
  }
})
