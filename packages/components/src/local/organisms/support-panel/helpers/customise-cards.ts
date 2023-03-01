import { ForceData, ForceTemplateData, MessageStructure } from '@serge/custom-types'

export const customiseCyberCards = (_document: MessageStructure | undefined, schema: Record<string, any>,
  forceId: ForceData['uniqid'], forceTemplateData: ForceTemplateData[]): Record<string, any> => {
  const res = { ...schema }
  if (schema) {
    if (forceId && forceTemplateData && forceTemplateData.length) {
      const cards = res.properties?.activityCard
      if (cards) {
        const myData = forceTemplateData.find((data) => data.force === forceId)
        if (myData && myData.cards) {
          const withNone = ['None']
          const withCards = withNone.concat(myData.cards)
          cards.enum = withCards
        }
      }
    }
  }
  return res
}
