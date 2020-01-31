export default function findPerceivedAsClasses (/* string */ myForce, /* string */ hisForce, /* his type */ hisType,
  /* array percept */ hisPerceptions, /* boolean */ userIsUmpire, /* string */ assetName) {
  let perception
  if (myForce === hisForce || userIsUmpire) {
    perception = { force: hisForce, type: hisType }
  } else {
    const hisPerception = hisPerceptions[myForce]
    if (hisPerception != null) {
      perception = { force: hisPerception.force, type: hisPerception.type }
    } else {
      perception = null
    }
  }
  if (perception) {
    // TODO: this is a temporary workaround. We should be taking the force color from the
    // force's color field, not by injecting the force name
    // If the force contains a '2'', trim it
    let force = perception.force
    const ind = force.indexOf('2')
    if (ind > 0) {
      force = force.substring(0, ind)
    }

    const forceClass = force ? force.toLowerCase() : 'unknown'
    const typeClass = perception.type ? perception.type.replace(/ /g, '-').toLowerCase() : 'unknown'
    return `platform-counter platform-force-${forceClass} platform-type-${typeClass}`
  } else {
    return perception
  }
}
