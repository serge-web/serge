import { ForceData, ForceTemplateData, MessageStructure } from 'src/custom-types'
import _ from 'lodash'

const umpireCards = (forceTemplateData: ForceTemplateData[]): ForceTemplateData => {
  const cards: string[] = []
  forceTemplateData.forEach((item) => {
    if (item.cards) {
      cards.push(...item.cards)
    }
  })
  const uniqCards = _.uniq(cards)
  return {
    force: 'any',
    cards: uniqCards
  }
}

export const customiseCyberCards = (_document: MessageStructure | undefined, schema: Record<string, any>,
  forceId: ForceData['uniqid'], isUmpire: boolean, forceTemplateData?: ForceTemplateData[]): Record<string, any> => {
  const res = { ...schema }
  if (schema) {
    if (forceId && forceTemplateData && forceTemplateData.length) {
      const cards = res.properties?.activityCard
      if (cards) {
        const myData = isUmpire ? umpireCards(forceTemplateData) : forceTemplateData.find((data) => data.force === forceId)
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
