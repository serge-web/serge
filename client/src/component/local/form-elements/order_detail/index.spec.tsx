/* global it expect */

import { GroupedActivitySet, MessagePlanning, PerForcePlanningActivitySet, PlanningActivity } from '@serge/custom-types'
import { MockPerForceActivities, P9Mock } from '@serge/mocks'
import _, { noop } from 'lodash'
import React from 'react'
import renderer from 'react-test-renderer'
import OrderDetail from './index'

// NOTE: hard-code these, rather than take them from mock data
// since the spec breaks if the mock data changes
const planningMessage: MessagePlanning =
  {
    messageType: 'PlanningMessage',
    details: {
      channel: 'channel-blue-planning',
      from: {
        force: 'Blue',
        forceColor: '#00F',
        roleName: 'Mar-4',
        roleId: 'rk116f53',
        iconURL: 'default_img/umpireDefault.png',
        forceId: 'F-Blue'
      },
      messageType: 'Land Activity',
      timestamp: '2022-09-22T12:14:31.627Z',
      turnNumber: 3
    },
    message: {
      Reference: 'Blue-18',
      title: 'Order item 18 Asymmetric',
      startDate: '2022-11-15T00:05:00.000Z',
      endDate: '2022-11-15T00:55:00.000Z',
      location: [
        {
          uniqid: 'aa7',
          geometry: {
            type: 'Feature',
            properties: {
              id: 'Transit//Route',
              startDate: '2022-11-15T00:05:00.000Z',
              endDate: '2022-11-15T00:55:00.000Z',
              force: 'F-Blue',
              startTime: 1668470700000,
              endTime: 1668473700000
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [
                  139.8303,
                  -8.5197
                ],
                [
                  141.6,
                  -14.63
                ],
                [
                  142.73,
                  -20.41
                ],
                [
                  142.9809,
                  -20.6715
                ]
              ]
            }
          }
        }
      ],
      activity: 'Asymmetric',
      ownAssets: [
        { asset: 'a427', number: 4 },
        { asset: 'a428', number: 12 },
        { asset: 'a429', number: 2 }
      ],
      otherAssets: [
        { asset: 'a410' },
        { asset: 'a411' }
      ]
    },
    hasBeenRead: false,
    _id: 'm_F-Blue_18',
    _rev: '2'
  }

const allForces = P9Mock.data.forces.forces
const platformTypes = P9Mock.data.platformTypes ? P9Mock.data.platformTypes.platformTypes : []
const forceId = allForces[1].uniqid
const plan = planningMessage
const force = MockPerForceActivities.find((val: PerForcePlanningActivitySet) => val.force === forceId)

planningMessage.message.ownAssets = allForces[1].assets ? [{ asset: allForces[1].assets[0].uniqid, number: 1 }] : []
planningMessage.message.otherAssets = allForces[2].assets ? [{ asset: allForces[2].assets[0].uniqid }] : []

const activities: Array<PlanningActivity[]> | undefined = force && force.groupedActivities.map((val: GroupedActivitySet) => val.activities as PlanningActivity[])
const flatActivities = _.flatten(activities)

it('CheckboxType renders correctly', () => {
  const tree = renderer
    .create(<div>
      <OrderDetail onEditMessage={noop} onEditGeometry={noop} onEditOwnAssets={noop} onEditOppAssets={noop} plan={plan} forces={allForces} platformTypes={platformTypes} force={forceId}
        activities={flatActivities} />
    </div>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
