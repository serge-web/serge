export default function canControlThisForce (/* array */ allForces, /* string */ subjectForceId, /* String */ myForceId) {
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
};
