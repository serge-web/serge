export default function canControlThisForce (/* array */ allForces, /* string */ subjectForceId, /* String */ myForceId) {
  if (myForceId === subjectForceId) {
    return true
  } else {
    // get this force
    const thisForce = allForces.find(force => force.uniqid === subjectForceId)
    return !!(thisForce.controlledBy && thisForce.controlledBy.find(name => name === myForceId))
  }
};
