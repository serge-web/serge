import { PLANNING_MESSAGE } from '@serge/config'
import { ForceData, GameTurnLength, MessageDetails, MessageDetailsFrom, MessageInteraction, MessagePlanning, PlannedActivityGeometry, PlannedProps, Role } from '@serge/custom-types'
import { deepCopy, findAsset, incrementGameTime, updateGeometryTimings } from '@serge/helpers'
import { P9BMock, planningMessagesBulk } from '@serge/mocks'
import { sum } from 'lodash'
import moment from 'moment'
import { CompositeInteractionResults, getNextInteraction2, InteractionResults } from './getNextInteraction'

const wargame = P9BMock.data
const forces = wargame.forces.forces
const activities = P9BMock.data.activities ? P9BMock.data.activities.activities : []

// generate list of roles, for dropdown control
const allRoles: string[] = []
forces.forEach((force: ForceData) => {
  force.roles.forEach((role: Role) => {
    allRoles.push(force.uniqid + ' ~ ' + role.roleId)
  })
})

let dummy2: MessageDetails | MessageDetailsFrom | PlannedActivityGeometry | PlannedProps | CompositeInteractionResults | undefined

!7 && console.log('dummy', deepCopy, sum, moment, updateGeometryTimings, findAsset, dummy2)

const messages = planningMessagesBulk

const planningMessages2 = messages.filter(msg => msg.messageType === PLANNING_MESSAGE) as MessagePlanning[]

const interactionFor = (data: CompositeInteractionResults): MessageInteraction => {
  const selectedForce = P9BMock.data.forces.forces[1]
  const selectedRole = selectedForce.roles[1]
  const from: MessageDetailsFrom = {
    force: '',
    forceId: selectedForce.uniqid,
    forceColor: selectedForce.color,
    iconURL: selectedForce.iconURL,
    roleId: selectedRole.roleId,
    roleName: selectedRole.name
  }
  const details: MessageDetails = {
    channel: 'channel-planning',
    from: from,
    interaction: data.details,
    messageType: 'p9adjudicate',
    timestamp: moment().toISOString(),
    turnNumber: 2
  }
  const msg: MessageInteraction = {
    _id: data.details.id,
    details: details,
    message: data.outcomes,
    messageType: 'InteractionMessage'
  }
  return msg
}

it('gets count of', () => {
//  console.clear()
  const interactions: MessageInteraction[] = []
  const gameStartTimeLocal = P9BMock.data.overview.gameDate
  const turnLen: GameTurnLength = { unit: 'millis', millis: 259200000 }
  const turnEnd = incrementGameTime(gameStartTimeLocal, turnLen)
  const results1: InteractionResults = getNextInteraction2(planningMessages2, activities, interactions, 0, 30, gameStartTimeLocal, turnEnd, forces, true)
  console.log('spec results', results1)
  expect(results1).toBeTruthy()
  expect(results1).toEqual([156, 323])
})

it('gets interactions (2)', () => {
  console.clear()
  const interactions: MessageInteraction[] = []
  const gameStartTimeLocal = '2022-05-01T00:00:00.000Z' // P9BMock.data.overview.gameDate
  const turnLen: GameTurnLength = { unit: 'millis', millis: 259200000 }
  const turnEnd = incrementGameTime(gameStartTimeLocal, turnLen)
  const results1: InteractionResults = getNextInteraction2(planningMessages2, activities, interactions, 0, 30, gameStartTimeLocal, turnEnd, forces, false)
  expect(results1).toBeTruthy()
  if (results1 !== undefined && !Array.isArray(results1)) {
    const res1Msg = results1 as CompositeInteractionResults
    const newTime = res1Msg.details.startTime
    console.log('new time', gameStartTimeLocal, newTime)
    interactions.push(interactionFor(res1Msg))
    const results2: InteractionResults = getNextInteraction2(planningMessages2, activities, interactions, 0, 30, newTime, turnEnd, forces, false)
    expect(results2).toBeTruthy()
    const res2Msg = results2 as CompositeInteractionResults
    interactions.push(interactionFor(res2Msg))
    const results3: InteractionResults = getNextInteraction2(planningMessages2, activities, interactions, 0, 30, newTime, turnEnd, forces, false)
    expect(results3).toBeTruthy()
    const res3Msg = results3 as CompositeInteractionResults
    interactions.push(interactionFor(res3Msg))
  }
  console.log('listing interactions')
  console.table(interactions.map((msg: MessageInteraction) => {
    const details = msg.details.interaction
    return details && {
      id: msg._id,
      start: details.startTime
    }
  }))
})

it('avoids existing interactions', () => {
  const interactions: MessageInteraction[] = []
  const gameStartTimeLocal = '2022-11-14T00:00:00.000Z' // P9BMock.data.overview.gameDate
  const turnLen: GameTurnLength = { unit: 'millis', millis: 259200000 }
  const turnEnd = incrementGameTime(gameStartTimeLocal, turnLen)
  const results1: InteractionResults = getNextInteraction2(planningMessages2, activities, interactions, 0, 30, gameStartTimeLocal, turnEnd, forces, false)
  expect(results1).toBeTruthy()
  if (results1 !== undefined) {
    const res1Msg = results1 as CompositeInteractionResults
    const res1Id = res1Msg.details.id
    const results2: InteractionResults = getNextInteraction2(planningMessages2, activities, interactions, 0, 30, gameStartTimeLocal, turnEnd, forces, false)
    expect(results2).toBeTruthy()
    const res2Msg = results2 as CompositeInteractionResults
    // we haven't stored interaction, so it should return the same one
    expect(res2Msg.details.id).toEqual(res1Id)
    // now push the interaction and try again
    interactions.push(interactionFor(res1Msg))
    const results3: InteractionResults = getNextInteraction2(planningMessages2, activities, interactions, 0, 30, gameStartTimeLocal, turnEnd, forces, false)
    expect(results3).toBeTruthy()
    const res3Msg = results3 as CompositeInteractionResults
    // ok, this should not match the original one
    expect(res3Msg.details.id).not.toEqual(res1Id)
  }
})

it('fixes geometry timings', () => {
  const msgWithLocation = planningMessages2.find((msg: MessagePlanning) => {
    if (msg.message.location && msg.message.location.length === 4) {
      if (msg.message.ownAssets) {
        const hasSpeed = msg.message.ownAssets.find((item: { asset: string }) => {
          const asset = findAsset(forces, item.asset)
          let speedAttr
          if (asset.attributes) {
            for (const [key, value] of Object.entries(asset.attributes)) {
              if (key === 'a_Speed') {
                speedAttr = value
              }
            }
          }
          return !!speedAttr
        })
        return hasSpeed
      }
    }
    return false
  })
  if (msgWithLocation) {
    const loc = msgWithLocation.message.location
    expect(loc).toBeTruthy()
    const safeLoc = deepCopy(loc) as PlannedActivityGeometry[]

    // sort the assets
    const assets = msgWithLocation.message.ownAssets
    if (assets && assets.length) {
      const speeds: number[] = []
      assets.forEach((item: { asset: string }) => {
        const asset = findAsset(forces, item.asset)
        const attributes = asset.attributes
        if (attributes) {
          for (const [key, value] of Object.entries(attributes)) {
            if (key === 'a_Speed') {
              speeds.push(value as number)
            }
          }
        }
      })
      if (speeds.length > 0) {
        // console.table(safeLoc.map((plan: PlannedActivityGeometry) => {
        //   const props = plan.geometry.properties as PlannedProps
        //   return {
        //   id: plan.uniqid,
        //   start: props.startDate,
        //   end: props.endDate
        //   }
        // }))

        const total = sum(speeds)
        const mean = total / speeds.length
        const fixed = updateGeometryTimings(safeLoc, msgWithLocation.message.startDate, msgWithLocation.message.endDate, mean)
        expect(fixed).toBeTruthy()
        expect(fixed.length).toEqual(safeLoc.length)
        // console.table(fixed.map((plan: PlannedActivityGeometry) => {
        //   const props = plan.geometry.properties as PlannedProps
        //   return {
        //   id: plan.uniqid,
        //   start: props.startDate,
        //   end: props.endDate
        //   }
        // }))

        // check the timings still line up
        const leg1Before = safeLoc[0].geometry.properties as PlannedProps
        const leg1After = fixed[0].geometry.properties as PlannedProps
        const lastLegBefore = safeLoc[safeLoc.length - 1].geometry.properties as PlannedProps
        const lastLegAfter = fixed[safeLoc.length - 1].geometry.properties as PlannedProps
        expect(leg1Before.startDate).toEqual(leg1After.startDate)
        expect(leg1Before.endDate).not.toEqual(leg1After.startDate)
        expect(lastLegBefore.startDate).not.toEqual(lastLegAfter.startDate)
        expect(lastLegBefore.endDate).toEqual(lastLegAfter.endDate)
      }
    }
  } else {
    expect('failed to find location').toBeFalsy()
  }
}
)
