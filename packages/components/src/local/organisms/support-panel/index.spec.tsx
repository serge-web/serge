/* global it expect */
import { ChannelPlanning, ParticipantTemplate, TemplateBody } from '@serge/custom-types'
import { checkV3ParticipantStates } from '@serge/helpers'
import { P9Mock, planningMessages, planningMessageTemplatesMock } from '@serge/mocks'
import { noop } from 'lodash'
import React from 'react'
import renderer from 'react-test-renderer'
import SupportPanel from './index'

const planningChannel = P9Mock.data.channels.channels[0] as ChannelPlanning
const forces = P9Mock.data.forces.forces
const blueForce = forces[1]
const blueRole = blueForce.roles[0]
const thisPart = checkV3ParticipantStates(planningChannel, blueForce.uniqid, blueRole.roleId, false)

const myTemplateIds = thisPart.templatesIDs
const myTemplates = planningMessageTemplatesMock.filter((value: TemplateBody) =>
  myTemplateIds.find((id: ParticipantTemplate) => id._id === value._id)
)
const platformTypes = P9Mock.data.platformTypes!.platformTypes

describe('Support Panel component: ', () => {
  it('renders component correctly', () => {
    const tree = renderer
      .create(<SupportPanel
        forceIcons={[]}
        platformTypes={platformTypes}
        forceNames={[]}
        hideForcesInChannel={false}
        messages={planningMessages}
        selectedForce={blueForce.uniqid}
        selectedRole={blueRole.roleId}
        channel={planningChannel}
        forces={forces}
        onUnread={noop}
        onReadAll={noop}
        onRead={noop}
        templates={myTemplates}
      />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
