import { CHANNEL_PLANNING, INFO_MESSAGE_CLIPPED } from '@serge/config'
import { Asset, ChannelUI, ForceData, GameTurnLength, MessageChannel, MessageCustom, MessageInteraction, MessagePlanning, PlatformTypeData, PlayerUiChannels } from '@serge/custom-types'
import { incrementGameTime } from '@serge/helpers'
import { cloneDeep } from 'lodash'

export const FORCES = 'forces'
export const INTERACTIONS = 'interactions'
export const MESSAGES = 'messages'

const storeAsset = (asset: Asset, assets: Record<string, any>[], forceName: string, platformTypes: PlatformTypeData[],
  turnNumber: number, turnStart: string, turnEnd: string) => {
  const pType = platformTypes.find((plat) => plat.uniqid === asset.platformTypeId)
  const attrs = asset.attributes ? asset.attributes : {}
  const doneTypes = ['a_Type', 'a_C4_Status']
  let attrList: string = ''
  Object.keys(attrs).forEach(key => {
    const value = attrs[key]
    if (!doneTypes.includes(key)) {
      attrList += key + ':' + value + '//'
    }
  })
  const val = {
    id: asset.uniqid,
    name: asset.name,
    force: forceName,
    platformType: pType ? pType.name : 'UNKNOWN',
    subType: attrs.a_Type,
    health: asset.health || 'UNKNOWN',
    c4: attrs.a_C4_Status,
    location_lat: asset.location && asset.location[0],
    location_long: asset.location && asset.location[1],
    attributes: attrList,
    gameTurn: turnNumber,
    turnStart,
    turnEnd
  }
  assets.push(val)
  if (asset.comprising) {
    asset.comprising.forEach((asset2: Asset) => {
      storeAsset(asset2, assets, forceName, platformTypes, turnNumber, turnStart, turnEnd)
    })
  }
}

const planningMessages = (channels: PlayerUiChannels): { interactions: MessageInteraction[], plans: MessagePlanning[] } => {
  let messages: MessageChannel[] | undefined
  Object.keys(channels).forEach(key => {
    const channel: ChannelUI = channels[key]
    if (channel.cData.channelType === CHANNEL_PLANNING) {
      messages = channel.messages
    }
  })

  if (messages) {
    const nonInfo = messages.filter((msg) => !msg.infoType) as MessageCustom[]
    const interactions = nonInfo.filter((msg) => msg.details.interaction) as unknown as MessageInteraction[]
    const completeInteractions = interactions.filter((msg) => msg.details.interaction && msg.details.interaction.complete)
    const plans = nonInfo.filter((msg) => !msg.details.interaction) as unknown as MessagePlanning[]
    return { interactions: completeInteractions, plans }
  } else {
    console.warn('Didn\t find planning channel')
    return { interactions: [], plans: [] }
  }
}

const extractItems = (label: string, core: Record<string, any>, data: Record<string, any>[], outcomes: Record<string, any>[]): void => {
  data.forEach((item) => {
    const combined = Object.assign({}, core, item)
    combined.pType = label
    outcomes.push(combined)
  })
}

const extractOutcomes = (msg: MessageInteraction, plans: MessagePlanning[], outcomes: Record<string, Record<string, any>[]>): void => {
  const inter = msg.details.interaction
  if (inter) {
    const plan1 = plans.find((plan) => plan._id === inter.orders1)
    const plan2 = inter.orders2 && plans.find((plan) => plan._id === inter.orders2)
    const res: Record<string, any> = {
      id: msg._id,
      turn: msg.details.turnNumber,
      order1: plan1 && plan1.message.Reference + ' - ' + plan1.message.title,
      order2: plan2 && plan2.message.Reference + ' - ' + plan2.message.title,
      start: inter.startTime,
      end: inter.endTime,
      event: inter.event
    }
    if (!outcomes.outcomes_perception) {
      outcomes.outcomes_perception = []
    }
    if (!outcomes.outcomes_health) {
      outcomes.outcomes_health = []
    }
    if (!outcomes.outcomes_movement) {
      outcomes.outcomes_movement = []
    }
    extractItems('perception', res, msg.message.perceptionOutcomes, outcomes.outcomes_perception)
    extractItems('health', res, msg.message.healthOutcomes, outcomes.outcomes_health)
    extractItems('movement', res, msg.message.locationOutcomes, outcomes.outcomes_movement)
  } else {
    console.warn('Didn\'t find interaction details for', msg._id)
  }
}

const exportMessages = (channels: PlayerUiChannels, res: Record<string, Record<string, any>[]>) => {
  Object.keys(channels).forEach(key => {
    const channel: ChannelUI = channels[key]
    const messages = channel.messages
    if (messages) {
      const nonInfo = messages.filter((msg) => !msg.infoType && msg.messageType !== INFO_MESSAGE_CLIPPED) as MessageCustom[]
      const nonInteraction = nonInfo.filter((msg) => !msg.details.interaction)
      nonInteraction.forEach((msg) => {
        const fullMmsgLabel = msg.details.messageType
        const msgLabel = fullMmsgLabel.substring(0, 30)
        const core = {
          id: msg._id,
          title: msg.message.title + '-' + msg.message.Reference,
          channel: channel.uniqid,
          fromForce: msg.details.from.force,
          from: msg.details.from.name,
          messageType: msg.details.messageType,
          time: msg.details.timestamp,
          turnNumber: msg.details.turnNumber
        }
        const msgAny = cloneDeep(msg.message)
        const unpack = ['location', 'ownAssets', 'otherAssets', 'domain', 'synchronisedWith']
        unpack.forEach((item) => {
          if (msgAny[item]) {
            msgAny[item] = JSON.stringify(msgAny[item])
          }
        })
        const combined = Object.assign({}, core, msgAny)
        if (!res[msgLabel]) {
          res[msgLabel] = []
        }
        res[msgLabel].push(combined)
      })
    }
  })
}

const handleExport = (gameDate: string, gameTurnTime: GameTurnLength, allPlatformTypes: PlatformTypeData[],
  allForces: ForceData[], turnNumber: number, channels: PlayerUiChannels): Record<string, Record<string, any>[]> => {
  const res: Record<string, Record<string, any>[]> = {}
  const turnStart = gameDate
  const turnEnd = incrementGameTime(gameDate, gameTurnTime)
  const platformTypes = allPlatformTypes
  const forces = allForces
  const assets: Array<Record<string, any>> = []
  forces.forEach((force: ForceData) => {
    const forceName = force.name
    if (force.assets) {
      force.assets.forEach((asset: Asset) => {
        storeAsset(asset, assets, forceName, platformTypes, turnNumber, turnStart, turnEnd)
      })
    }
  })
  res.assets = assets
  const { interactions, plans } = planningMessages(channels)
  interactions.forEach((msg) => extractOutcomes(msg, plans, res))
  exportMessages(channels, res)
  return res
}

export default handleExport
