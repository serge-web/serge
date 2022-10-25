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
const myTemplates = planningMessageTemplatesMock.filter((value: TemplateBody): any =>
  myTemplateIds.find((id: ParticipantTemplate) => id._id === value._id)
)
const platformTypes = (P9Mock.data.platformTypes && P9Mock.data.platformTypes.platformTypes) || []

describe('Support Panel component: ', () => {
  it('renders component correctly', () => {
    const tree = renderer
      .create(<SupportPanel
        platformTypes={platformTypes}
        allForces={P9Mock.data.forces.forces}
        gameDate={P9Mock.data.overview.gameDate}
        currentWargame={P9Mock.currentWargame || ''}
        selectedAssets={[]}
        setSelectedAssets={noop}
        selectedOrders={[]}
        setSelectedOrders={noop}
        currentTurn={P9Mock.gameTurn}
        messages={planningMessages}
        channel={planningChannel}
        onUnread={noop}
        onReadAll={noop}
        onRead={noop}
        templates={myTemplates}
        adjudicationTemplate={planningMessageTemplatesMock[0]}
        activityTimeChanel={noop}
        dispatch={noop}
        saveMessage={(): any => noop}
        saveNewActivityTimeMessage={(): any => noop}
        selectedForce={blueForce}
        selectedRoleId={blueRole.roleId}
        selectedRoleName={blueRole.name}
        isUmpire={false}
        setOpForcesForParent={noop}
        setOwnForcesForParent={noop}
        allOppAssets={[]}
        allOwnAssets={[]}
        activities={[]}
      />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
