import { PLANNING_MESSAGE } from '@serge/config'
import { ForceData, MessageInteraction, MessagePlanning, PlannedActivityGeometry, PlannedProps, Role } from '@serge/custom-types'
import { deepCopy, findAsset, incrementGameTime } from '@serge/helpers'
import { P9BMock, planningMessagesBulk } from '@serge/mocks'
import * as turf from '@turf/turf'
import { Feature, LineString } from 'geojson'
import { sum } from 'lodash'
import moment from 'moment'
import { PlanningContact } from '../../support-panel/helpers/gen-order-data'
import { getNextInteraction2 } from './getNextInteraction'

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

const messages = planningMessagesBulk

const planningMessages2 = messages.filter(msg => msg.messageType === PLANNING_MESSAGE) as MessagePlanning[]

const gameStartTime = P9BMock.data.overview.gameDate
const turnLen = P9BMock.data.overview.gameTurnTime
const turnEnd = incrementGameTime(gameStartTime, turnLen)

it('gets all interactions (2)', () => {
  const interactions: MessageInteraction[] = []
  console.log('game start time', gameStartTime)
  const contacts: PlanningContact[] = getNextInteraction2(planningMessages2, activities, interactions, 0, 30, gameStartTime, turnEnd, true)
  if (contacts) {
    expect(contacts.length).toEqual(0)
  }
}
)

it('gets interactions (2)', () => {
  const interactions: MessageInteraction[] = []
  console.log('game start time', gameStartTime)
  const contacts: PlanningContact[] = getNextInteraction2(planningMessages2, activities, interactions, 0, 30, gameStartTime, turnEnd, false)
  if (contacts) {
    expect(contacts.length).toEqual(0)
  }
}
)

// it('process successive interactions', () => {
//   const interactions: MessageInteraction[] = []
//   let contacts: PlanningContact[] = []
//   for (let ctr = 0; ctr < 20 && contacts.length > 0; ctr++) {
//     contacts = getNextInteraction(planningMessages2, activities, interactions, ctr, 30)
//     if (contacts) {
//       const newInteractions: MessageInteraction[] = contacts.map((contact): MessageInteraction => {
//         return interactionFor(contact, forces[1], forces[1].roles[0].roleId, forces[1].roles[0].name, 4, 'channelId', 'adj-template')
//       })
//       interactions.push(...newInteractions)
//     }
//   }
//   !7 && console.table(interactions.map((inter) => {
//     const interact = inter.details.interaction
//     if (interact) {
//       return { id: interact.id, start: interact.startTime, end: interact.endTime }
//     } else {
//       return { id: 'n/a' }
//     }
//   }))
// })

// it('gets all interactions', () => {
//   const interactions: MessageInteraction[] = []
//   const contacts: PlanningContact[] = getNextInteraction(planningMessages2, activities, interactions, 0, 30, true)
//   if (contacts) {
//     const interactions: MessageInteraction[] = contacts.map((contact): MessageInteraction => {
//       return interactionFor(contact, forces[1], forces[1].roles[0].roleId, forces[1].roles[0].name, 4, 'channelId', 'adj-template')
//     })
//     expect(interactions.length).toEqual(201)
//   }
// }
// )

const updateLeg = (leg: PlannedActivityGeometry, startT: number, endT: number, speedKts: number,
  millisRemaining: number, outwardLeg: boolean): [PlannedActivityGeometry, number] => {
  // ok, sort times
  if (leg.geometry.geometry.type === 'LineString') {
    const fLine: Feature<LineString> = turf.lineString(leg.geometry.geometry.coordinates)
    const len = turf.length(fLine, { units: 'meters' })
    const speedMs = speedKts * 0.514444
    const millis = (len / speedMs) * 1000
    console.log('leg', outwardLeg, Math.floor(millis), Math.floor(len), Math.floor(speedMs), moment(millis).format('h:mm:ss') )

    // mangle the millis, to make things work, if necessary
    const safeMillis = millis < millisRemaining ? millis : millisRemaining / 2
    if (millis < millisRemaining) {
      console.warn('had to trim millis to fit in time period')
    }

    if (safeMillis < millisRemaining) {
      const props = leg.geometry.properties as PlannedProps
      if (outwardLeg) {
        // ok, update
        const finish = moment.utc(startT).add(safeMillis, 'milliseconds').toISOString()
        props.startDate = moment.utc(startT).toISOString()
        props.endDate = finish
      } else {
        // ok, update
        const start = moment.utc(endT).subtract(safeMillis, 'milliseconds').toISOString()
        props.startDate = start
        props.endDate = moment.utc(endT).toISOString()
      }
      // consume time
      const remaining = millisRemaining - safeMillis
      return [leg, remaining]
    }
  }
  return [leg, 0]
}

const updateGeometryTimings2 = (geometries: PlannedActivityGeometry[], startTime: string, endTime: string, speedKts: number): PlannedActivityGeometry[] => {
  const res = deepCopy(geometries) as PlannedActivityGeometry[]
  let startVal = moment.utc(startTime).valueOf()
  let endVal = moment.utc(endTime).valueOf()
  let remaining = endVal - startVal
  const legOut = updateLeg(res[0], startVal, endVal, speedKts, remaining, true)
  console.log('leg out 1', legOut)
  if (legOut[1]) {
    res[0] = legOut[0]
    remaining = legOut[1]
    const legOutProps = legOut[0].geometry.properties as PlannedProps
    console.log('leg out', legOutProps)
    startVal = moment.utc(legOutProps.endDate).valueOf()
  }

  const legBack = updateLeg(res[geometries.length-1], startVal, endVal, speedKts, remaining, false)
  if (legBack[1]) {
    res[geometries.length-1] = legBack[0]
    remaining = legBack[1]
    const legOutProps = legBack[0].geometry.properties as PlannedProps
    endVal = moment.utc(legOutProps.startDate).valueOf()
  }

  // give all the remaining non-string goemetries this time period
  res.forEach((plan: PlannedActivityGeometry) => {
    if (plan.geometry.geometry.type !== 'LineString') {
      const props = plan.geometry.properties as PlannedProps
      props.startDate = moment.utc(startVal).toISOString()
      props.endDate = moment.utc(endVal).toISOString()
    }
  })

  !7 && console.log(startTime, endTime, speedKts)
  return res
}

it('fixes geometry timings', () => {
  const msgWithLocation = planningMessages2.find((msg: MessagePlanning) => {
    if (msg.message.location) {
      if (msg.message.ownAssets) {
        const hasSpeed = msg.message.ownAssets.find((item: { asset: string }) => {
          const asset = findAsset(forces, item.asset)
          let speedAttr
          if (asset.attributes) {
            for (const [key, value] of Object.entries(asset.attributes)) {
              console.log('attr', key, value)
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
    console.log('message', msgWithLocation.message)
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
        const total = sum(speeds)
        const mean = total / speeds.length
        const fixed = updateGeometryTimings2(safeLoc, msgWithLocation.message.startDate, msgWithLocation.message.endDate, mean)
        expect(fixed).toBeTruthy()
        console.table(fixed.map((plan: PlannedActivityGeometry) => {
          const props = plan.geometry.properties as PlannedProps
          return {
          id: plan.uniqid,
          start: props.startDate,
          end: props.endDate
          }
        }))
//        console.log('fixed', fixed)
      }
    }
  } else {
    expect('failed to find location').toBeFalsy()
  }
}
)
