import { Phase } from '@serge/config'
import { ChannelPlanning, CoreMessage, MessageDetails, ParticipantPlanning, ParticipantTemplate, PlayerUiActionTypes, TemplateBody } from '@serge/custom-types'
import { MockPerForceActivities, MockPlanningActivities, P9Mock, planningMessages, planningMessageTemplatesMock } from '@serge/mocks'
import { mount } from 'enzyme'
import { noop } from 'lodash'
import React from 'react'
import { fixPerForcePlanningActivities } from './helpers/collate-plans-helper'
import PlanningChannel from './index'

export const mockFn = (): PlayerUiActionTypes => ({
  type: 'mock' as any,
  payload: {}
})

jest.mock('leaflet', () => ({
  ...jest.requireActual('leaflet'),
  Symbol: {
    arrowHead: jest.fn()
  }
}))
jest.mock('leaflet-polylinedecorator', () => jest.fn())
jest.mock('react-leaflet-v3', () => ({
  useMap: (): jest.Mock => jest.fn(),
  MapContainer: (): React.ReactElement => <></>
}))

jest.mock('react-leaflet-geoman-v2', () => ({
  GeomanControls: (): React.ReactElement => <></>
}))

const wargame = P9Mock.data
const channels = wargame.channels.channels
const planningChannel = channels[0]
const forces = wargame.forces.forces
const platformTypes = wargame.platformTypes ? wargame.platformTypes.platformTypes : []

const force = forces[1]
const role = force && force.roles[0]

const planningActivities = MockPlanningActivities
const perForcePlanningActivities = MockPerForceActivities
const filledInPerForcePlanningActivities = fixPerForcePlanningActivities(perForcePlanningActivities, planningActivities)

const saveMessage = (dbName: string, details: MessageDetails, message: CoreMessage) => {
  return async (): Promise<void> => {
    console.log('dbName: ', dbName, ', details: ', details, ', message: ', message)
  }
}

// get the templates for this user
const participants = planningChannel.participants as ParticipantPlanning[]
const participant = participants.find((p: ParticipantPlanning) => (p.roles.length === 0) || (p.roles.includes(role?.roleId || '')))
const templatesBlocks = participant ? participant.templates : []
const templateIDs: string[] = templatesBlocks.map((templ: ParticipantTemplate) => templ._id)
const templateBodies = planningMessageTemplatesMock.filter((template: TemplateBody) => templateIDs.includes(template._id))

describe('Planning Channel component: ', () => {
  it('renders component correctly', () => {
    const tree = mount(<PlanningChannel
      channel={channels[0] as ChannelPlanning}
      messages={planningMessages}
      allTemplates={templateBodies}
      channelId={channels[0].uniqid}
      adjudicationTemplate={planningMessageTemplatesMock[0]}
      dispatch={noop}
      getAllWargameMessages={(): any => noop}
      markAllAsRead={mockFn}
      markUnread={mockFn}
      openMessage={mockFn}
      saveMessage={saveMessage}
      reduxDispatch={noop}
      saveNewActivityTimeMessage={(): any => noop}
      platformTypes={platformTypes}
      selectedRoleId={role?.roleId}
      selectedRoleName={role?.name || ''}
      currentWargame={P9Mock.wargameTitle}
      selectedForce={force || forces[1]}
      phase={Phase.Planning}
      allForces={forces}
      gameDate={P9Mock.data.overview.gameDate}
      gameTurnTime={wargame.overview.gameTurnTime}
      currentTurn={P9Mock.gameTurn}
      forcePlanningActivities={filledInPerForcePlanningActivities}
    />)
    expect(tree).toMatchSnapshot()
  })
})
