import { geometriesFor, randomOrdersDocs } from './gen-order-data'

import { P9Mock, MockPlanningActivities, planningMessages } from '@serge/mocks'
import moment from 'moment'
import { MessagePlanning, PlannedActivityGeometry, PlannedProps } from '@serge/custom-types'

const forces = P9Mock.data.forces.forces
const blueForce = forces[1]
const redForce = forces[2]

it('produces order data', () => {
  const numOrders = 20
  const orders = randomOrdersDocs(numOrders, forces, [blueForce.uniqid, redForce.uniqid], MockPlanningActivities)
  expect(orders).toBeTruthy()
  expect(orders.length).toEqual(numOrders)
})

it('produces planned goemetries', () => {
  if (blueForce.assets && redForce.assets) {
    const ownAssets = [blueForce.assets[0], blueForce.assets[1]]
    const targets = [redForce.assets[0], redForce.assets[1]]
    const activity = MockPlanningActivities[1]
    const startTime = moment('2022-11-15T00:00:00.000Z')
    const orders = geometriesFor(ownAssets, targets, activity, 22, startTime)
    expect(orders).toBeTruthy()
    expect(orders.length).toEqual(3)
    const geom = orders[1].geometry.geometry as any
    expect(geom.coordinates).toBeTruthy()
    expect(geom.coordinates.length).toEqual(1)
    expect(geom.coordinates[0].length).toEqual(5)
    expect(geom.coordinates[0][0].length).toEqual(2)
  }
})

const periodFor = (messages: MessagePlanning[]): Array<moment.Moment | undefined> => {
  let startDate: moment.Moment | undefined
  let endDate: moment.Moment | undefined
  messages.forEach((msg: MessagePlanning) => {
    const thisStart = moment(msg.message.startDate)
    const thisEnd = moment(msg.message.endDate)
    if (!startDate || thisStart.isBefore(startDate)) {
      startDate = thisStart.clone()
    }
    if (!endDate || thisEnd.isAfter(endDate)) {
      endDate = thisEnd.clone()
    }

    // const location = msg.message.location
    // if (location) {
    //   location.forEach((plan: PlannedActivityGeometry) => {
    //     const geom = plan.geometry
    //     const props = geom.properties as PlannedProps
    //     if (props) {
    //       const thisStart = moment(props.startDate)
    //       const thisEnd = moment(props.endDate)
    //       if (!startDate || thisStart.isBefore(startDate)) {
    //         startDate = thisStart.clone()
    //       }
    //       if (!endDate || thisEnd.isAfter(endDate)) {
    //         endDate = thisEnd.clone()
    //       }
    //     }
    //   })
    // }
  })
  return [startDate, endDate]
}

const intoBins = (messages: MessagePlanning[], startDate: moment.Moment, endDate: moment.Moment): MessagePlanning[] => {
  const thisBin = messages.filter((msg: MessagePlanning) => {
    const thisStart = moment(msg.message.startDate)
    const thisEnd = moment(msg.message.endDate)
    console.log('bins', startDate, thisStart, endDate, thisEnd)
    return (thisStart.isSameOrAfter(startDate) && thisEnd.isSameOrBefore(endDate))
  })
  return thisBin
}

const binMessages = (messages: MessagePlanning[], bins: number): number => {
  console.log('len', messages.length)
  const [startDate, endDate] = periodFor(messages)

  if (startDate && endDate) {
    const period = endDate.valueOf() - startDate.valueOf()
    console.log('dates', startDate, endDate, period)
    const start = startDate.valueOf()
    const binSize = period / bins

    for (let bin = 0; bin <= bins; bin++) {
      const thisStart = start + bin * binSize
      const thisEnd = thisStart + binSize
      console.log('period', moment(thisStart), moment(thisEnd))
      const thisBin = intoBins(messages, moment(thisStart), moment(thisEnd))
      console.log('size', thisBin.length)
    }
  }

  return messages.length
}

it('bins overlaps for time', () => {
  expect(binMessages(planningMessages, 12)).toEqual(10)
})
