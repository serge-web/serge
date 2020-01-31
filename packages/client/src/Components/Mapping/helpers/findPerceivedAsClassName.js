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
    const forceClass = perception.force ? perception.force.toLowerCase() : 'unknown'
    const typeClass = perception.type ? perception.type.replace(/ /g, '-').toLowerCase() : 'unknown'
    return `platform-counter platform-force-${forceClass} platform-type-${typeClass}`
  } else {
    return perception
  }
}
