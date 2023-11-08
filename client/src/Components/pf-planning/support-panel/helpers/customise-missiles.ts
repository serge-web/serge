import { ForceData, ForceTemplateData, MessageStructure } from 'src/custom-types'
import _ from 'lodash'

const umpireMissiles = (forceTemplateData: ForceTemplateData[]): ForceTemplateData => {
  const missiles: string[] = []
  forceTemplateData.forEach((item) => {
    if (item.missiles) {
      missiles.push(...item.missiles)
    }
  })
  const uniqMissiles = _.uniq(missiles)
  return {
    force: 'any',
    missiles: uniqMissiles
  }
}

export const customiseMissiles = (_document: MessageStructure | undefined, schema: Record<string, any>,
  forceId: ForceData['uniqid'], isUmpire: boolean, forceTemplateData?: ForceTemplateData[]): Record<string, any> => {
  const res = { ...schema }
  if (schema) {
    if (forceId && forceTemplateData && forceTemplateData.length) {
      const ownMissiles = res.properties?.ownAssets?.items?.properties?.missileType
      const oppMissiles = res.properties?.otherAssets?.items?.properties?.missileType
      if (ownMissiles || oppMissiles) {
        const myData = isUmpire ? umpireMissiles(forceTemplateData) : forceTemplateData.find((data) => data.force === forceId)
        if (myData && myData.missiles) {
          if (ownMissiles) {
            ownMissiles.enum = myData.missiles
          }
          if (oppMissiles) {
            oppMissiles.enum = myData.missiles
          }
        }
      }
    }
  }
  return res
}
