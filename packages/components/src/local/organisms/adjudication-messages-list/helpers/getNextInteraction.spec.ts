import { ADJUDICATION_OUTCOMES, INFO_MESSAGE_CLIPPED, PLANNING_MESSAGE } from '@serge/config'
import { GameTurnLength, MessageAdjudicationOutcomes, MessageDetails, MessageDetailsFrom, MessageInteraction, MessagePlanning, PerForcePlanningActivitySet, PlannedActivityGeometry, PlannedProps, PlanningActivity } from '@serge/custom-types'
import { deepCopy, findAsset, incrementGameTime, updateGeometryTimings } from '@serge/helpers'
import { P9BMock, planningMessages, planningMessagesBulk } from '@serge/mocks'
import { cloneDeep, sum } from 'lodash'
import moment from 'moment'
import { generateAllTemplates } from '../../../molecules/json-editor/helpers/generate-p9-templates'
import { injectTimes, interactsWith, invertMessages, overlapsInTime } from '../../support-panel/helpers/gen-order-data'
import { CompositeInteractionResults, emptyOutcomes, eventOutcomesFor, getEventList, getNextInteraction2, insertSpatialOutcomesFor, InteractionResults, TimedIntervention, trimPeriod, TurnTimes } from './getNextInteraction'

const wargame = P9BMock.data
const forces = wargame.forces.forces
const activities = P9BMock.data.activities ? P9BMock.data.activities.activities : []
const overview = P9BMock.data.overview
const turn = P9BMock.gameTurn

let dummy2: MessageDetails | MessageDetailsFrom | PlannedActivityGeometry | PlannedProps | CompositeInteractionResults | undefined

const messages = planningMessagesBulk
const planningMessages2 = messages.filter(msg => msg.messageType === PLANNING_MESSAGE) as MessagePlanning[]

const shortPlanningMessages = planningMessages.filter((msg) => msg.messageType !== INFO_MESSAGE_CLIPPED && !msg.details.interaction) as MessagePlanning[]

const shortPlans = planningMessages.filter(msg => msg.messageType === PLANNING_MESSAGE) as MessagePlanning[]

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

!7 && console.log('dummy', forces, activities, deepCopy, sum, moment, updateGeometryTimings, findAsset, dummy2, planningMessages2.length, shortPlans, !!interactionFor)

it('generates movement outcomes', () => {
  const planWithReturn = shortPlanningMessages.find((plan) => {
    const loc = plan.message.location
    const act = plan.message.activity
    const goodies = ['ASW', 'Patrol', 'Refuel']
    const goodPlan = goodies.some((item) => act.indexOf(item) !== -1)
    if (goodPlan && loc && loc.length > 0) {
      const lastLeg = loc[loc.length - 1]
      return (lastLeg.geometry.geometry.type === 'LineString')
    } else {
      return false
    }
  })
  if (planWithReturn) {
    const cutOffTime = moment().valueOf()
    const turnEnd = incrementGameTime(overview.gameDate, overview.gameTurnTime)
    const turnEndVal = moment.utc(turnEnd).valueOf()
    const turnPeriod: TurnTimes = { start: moment.utc(overview.gameDate).valueOf(), end: turnEndVal }
    const list: TimedIntervention[] = getEventList(cutOffTime, [planWithReturn], [], activities, turnPeriod, turn)
    expect(list).toBeTruthy()
    expect(list.length).toBeGreaterThan(0)
    const firstEvent = list[0]
    const outcomes = eventOutcomesFor(planWithReturn, emptyOutcomes(), firstEvent.activity, forces, firstEvent.event)
    expect(outcomes).toBeTruthy()
    const listWithInteraction = [firstEvent.id]
    const list2: TimedIntervention[] = getEventList(cutOffTime, [planWithReturn], listWithInteraction, activities, turnPeriod, turn)
    expect(list2.length).toEqual(0)
  } else {
    expect(false).toBeTruthy() // should have found plan to test
  }
})

it('handles spatial outcomes', () => {
  let dca: PlanningActivity | undefined
  const plan = planningMessages2.find((plan) => plan.message.activity === 'f-green-Land-Land Close Combat')
  activities.find((force) => {
    return force.groupedActivities.find((group) => group.activities.find((act) => {
      if (act.uniqid === 'f-green-Land-Land Close Combat') {
        dca = act
        return true
      } else {
        return false
      }
    }))
  })
  expect(dca).toBeTruthy()
  const outcomes: MessageAdjudicationOutcomes = {
    messageType: ADJUDICATION_OUTCOMES,
    healthOutcomes: [],
    locationOutcomes: [],
    perceptionOutcomes: [],
    narrative: '',
    Reference: plan ? plan.message.Reference : 'bb',
    important: false
  }
  // find a plan using this activity
  if (plan && dca) {
    insertSpatialOutcomesFor(plan, outcomes, dca, forces)
    expect(outcomes.healthOutcomes.length).toBeTruthy()
    expect(outcomes.perceptionOutcomes.length).toBeTruthy()
  } else {
    expect(false).toBeTruthy() // failed to find plan and activity
  }
})

it('trims period', () => {
  const p1: TurnTimes = { start: 100, end: 200 }
  const p2: TurnTimes = { start: 50, end: 250 }
  const p3: TurnTimes = { start: 150, end: 180 }
  const t1 = trimPeriod(p1, p2)
  expect(t1.start).toEqual(100)
  expect(t1.end).toEqual(200)

  const t2 = trimPeriod(p1, p3)
  expect(t2.start).toEqual(150)
  expect(t2.end).toEqual(180)
})

it('gets count of', () => {
//  console.clear()
  const interactions: MessageInteraction[] = []
  const gameStartTimeLocal = P9BMock.data.overview.gameDate
  const turnLen: GameTurnLength = { unit: 'millis', millis: 259200000 }
  const turnEnd = incrementGameTime(gameStartTimeLocal, turnLen)
  const results1: InteractionResults = getNextInteraction2(planningMessages2, activities, interactions, 0, 30, gameStartTimeLocal, turnEnd, forces, true, turn)
  console.log('spec results', results1)
  expect(results1).toBeTruthy()
  expect(Array.isArray(results1)).toBeTruthy()
  const resArr = results1 as [number, number]
  expect(resArr[0]).toBeGreaterThan(0)
  expect(resArr[1]).toBeGreaterThan(0)
  // should be more events than interactions
  expect(resArr[0]).toBeGreaterThan(resArr[1])
})

it('gets interactions (2)', () => {
  console.clear()
  const interactions: MessageInteraction[] = []
  const gameStartTimeLocal = '2022-05-01T00:00:00.000Z' // P9BMock.data.overview.gameDate
  const turnLen: GameTurnLength = { unit: 'millis', millis: 259200000 }
  const turnEnd = incrementGameTime(gameStartTimeLocal, turnLen)
  const results1: InteractionResults = getNextInteraction2(planningMessages2, activities, interactions, 0, 30, gameStartTimeLocal, turnEnd, forces, false, turn)
  expect(results1).toBeTruthy()
  if (results1 !== undefined && !Array.isArray(results1)) {
    const res1Msg = results1 as CompositeInteractionResults
    const newTime = res1Msg.details.startTime
    console.log('new time', gameStartTimeLocal, newTime)
    interactions.push(interactionFor(res1Msg))
    const results2: InteractionResults = getNextInteraction2(planningMessages2, activities, interactions, 0, 30, newTime, turnEnd, forces, false, turn)
    expect(results2).toBeTruthy()
    const res2Msg = results2 as CompositeInteractionResults
    interactions.push(interactionFor(res2Msg))
    const results3: InteractionResults = getNextInteraction2(planningMessages2, activities, interactions, 0, 30, newTime, turnEnd, forces, false, turn)
    expect(results3).toBeTruthy()
    const res3Msg = results3 as CompositeInteractionResults
    interactions.push(interactionFor(res3Msg))
  }
  // console.log('listing interactions')
  // console.table(interactions.map((msg: MessageInteraction) => {
  //   const details = msg.details.interaction
  //   return details && {
  //     id: msg._id,
  //     start: details.startTime
  //   }
  // }))
})

it('avoids existing interactions', () => {
  const interactions: MessageInteraction[] = []
  const gameStartTimeLocal = '2022-11-14T00:00:00.000Z' // P9BMock.data.overview.gameDate
  const turnLen: GameTurnLength = { unit: 'millis', millis: 259200000 }
  const turnEnd = incrementGameTime(gameStartTimeLocal, turnLen)
  const results1: InteractionResults = getNextInteraction2(planningMessages2, activities, interactions, 0, 30, gameStartTimeLocal, turnEnd, forces, false, turn)
  expect(results1).toBeTruthy()
  if (results1 !== undefined) {
    const res1Msg = results1 as CompositeInteractionResults
    const res1Id = res1Msg.details.id
    const results2: InteractionResults = getNextInteraction2(planningMessages2, activities, interactions, 0, 30, gameStartTimeLocal, turnEnd, forces, false, turn)
    expect(results2).toBeTruthy()
    const res2Msg = results2 as CompositeInteractionResults
    // we haven't stored interaction, so it should return the same one
    expect(res2Msg.details.id).toEqual(res1Id)
    // now push the interaction and try again
    interactions.push(interactionFor(res1Msg))
    const results3: InteractionResults = getNextInteraction2(planningMessages2, activities, interactions, 0, 30, gameStartTimeLocal, turnEnd, forces, false, turn)
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
})

it('observes interacts with', () => {
  console.clear()
  // find overlapping messages
  const newGeometries = invertMessages(shortPlans, activities)
  const withTimes = injectTimes(newGeometries)

  // find overlap
  const first = withTimes[0]
  const second = withTimes.find((item) => {
    if (item.id !== first.id) {
      return overlapsInTime(first, item)
    }
    return false
  })

  if (second) {
    const m1Acts = activities.find((act) => act.force === first.plan.details.from.forceId)
    const m2Acts = activities.find((act) => act.force === second.plan.details.from.forceId)
    if (m1Acts && m2Acts) {
      const firstAct = cloneDeep(first.activity)
      const secondAct = cloneDeep(second.activity)
      // clear out the interactions
      firstAct.interactsWith = ['bb', 'aa']
      secondAct.interactsWith = ['cc', 'dd']
      expect(interactsWith(firstAct, secondAct)).toBeFalsy()
      firstAct.interactsWith = [secondAct.actId]
      secondAct.interactsWith = [firstAct.actId]
      expect(interactsWith(firstAct, secondAct)).toBeTruthy()
      // clear on set, so they clash
      secondAct.interactsWith = []
      expect(() => interactsWith(firstAct, secondAct, true)).toThrow()
    }
  }
})

const testAct = (activities: PerForcePlanningActivitySet[]) => {
  activities.forEach((force1) => {
    force1.groupedActivities.forEach((group1) => {
      group1.activities.forEach((act1) => {
        activities.forEach((force2) => {
          force2.groupedActivities.forEach((group2) => {
            group2.activities.forEach((act2) => {
              interactsWith(act1, act2, true)
            })
          })
        })
      })
    })
  })
}

it('interactionsWith is balanced for p9b activities', () => {
  testAct(activities)
})

it('interactionsWith is balanced for activity generation', () => {
  // first test the generated activities
  const newActs = generateAllTemplates()
  testAct(newActs.activities)
  testAct(activities)
})
