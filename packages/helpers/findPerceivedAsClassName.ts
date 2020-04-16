export default function findPerceivedAsClasses (myForce: string, hisForce:string, hisType:string,
  hisPerceptions: [any], userIsUmpire: boolean, assetName: string): string {
  let perception: any
  if (myForce === hisForce || userIsUmpire) {
    perception = { force: hisForce, type: hisType }
  } else {
    if (hisPerceptions) {
      const hisPerception: any = hisPerceptions[myForce]
      if (hisPerception != null) {
        perception = { force: hisPerception.force, type: hisPerception.type }
      } else {
        perception = null
      }
    } else {
      perception = null
    }
  }
  if (perception) {
    const forceClass: string = perception.force ? perception.force.toLowerCase() : 'unknown'
    const typeClass: string = perception.type ? perception.type.replace(/ /g, '-').toLowerCase() : 'unknown'
    return `platform-counter platform-force-${forceClass} platform-type-${typeClass}`
  } else {
    return perception
  }
}
