const canControlThisForce = (allForces: Array<any>, subjectForceId: string, myForceId: string): any => {
  if (myForceId === subjectForceId) {
    return true
  } else {
    // get this force
    const thisForce = allForces.find(force => force.uniqid === subjectForceId)
    if (!thisForce) {
      console.error('can\'t find forceId', subjectForceId)
    } else {
      return !!(thisForce.controlledBy && thisForce.controlledBy.find(name => name === myForceId))
    }
  }
}

export default canControlThisForce
