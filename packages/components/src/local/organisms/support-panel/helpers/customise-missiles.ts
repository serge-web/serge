import { ForceData, ForceTemplateData, MessageStructure } from '@serge/custom-types'

export const customiseMissiles = (_document: MessageStructure | undefined, schema: Record<string, any>,
  forceId: ForceData['uniqid'], forceTemplateData: ForceTemplateData[]): Record<string, any> => {
  const res = { ...schema }
  if (schema) {
    if (forceId && forceTemplateData && forceTemplateData.length) {
      const ownMissiles = res.properties?.ownAssets?.items?.properties?.missileType
      const oppMissiles = res.properties?.otherAssets?.items?.properties?.missileType
      if (ownMissiles || oppMissiles) {
        const myData = forceTemplateData.find((data) => data.force === forceId)
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
