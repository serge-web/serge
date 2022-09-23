import { ChannelPlanning, MessageDetails, ParticipantPlanning, ParticipantTemplate, PlayerUiActionTypes, TemplateBody } from '@serge/custom-types'
import { P9Mock, planningMessages, planningMessageTemplatesMock } from '@serge/mocks'
import { mount } from 'enzyme'
import { noop } from 'lodash'
import React from 'react'
import PlanningChannel2 from './index'

export const mockFn = (): PlayerUiActionTypes => ({
  type: "mock" as any,
  payload: {}
})

const wargame = P9Mock.data
const channels = wargame.channels.channels
const planningChannel = channels[0]
const forces = wargame.forces.forces
const platformTypes = wargame.platformTypes ? wargame.platformTypes.platformTypes : []

const force = forces[1]
const role = force && force.roles[0]

const saveMessage = (dbName: string, details: MessageDetails, message: object) => {
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
    const tree = mount(<PlanningChannel2
      channel={channels[0] as ChannelPlanning}
      messages={planningMessages}
      templates={templateBodies}
      dispatch={noop}
      getAllWargameMessages={() => noop}
      markAllAsRead={mockFn}
      markUnread={mockFn}
      openMessage={mockFn}
      saveMessage={saveMessage}
      reduxDispatch={noop}
      saveNewActivityTimeMessage={() => noop}
      platformTypes={platformTypes}
      selectedRoleId={role?.roleId}
      selectedRoleName={role?.name || ''}
      currentWargame={P9Mock.wargameTitle}
      selectedForce={force || forces[1]}
      isUmpire={false}
      allForces={forces}
      gameDate={P9Mock.data.overview.gameDate}
      currentTurn={P9Mock.gameTurn}
    />)
    expect(tree).toMatchSnapshot()
  })
})
