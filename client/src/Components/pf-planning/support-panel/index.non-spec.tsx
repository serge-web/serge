/* global it expect */
import { INFO_MESSAGE_CLIPPED, Phase, PLANNING_MESSAGE } from 'src/config'
import { ChannelPlanning, MessageInteraction, MessagePlanning } from 'src/custom-types'
import { forceColors } from 'src/Helpers'
import { P9BMock, planningMessages as planningChannelMessages, turnPeriod } from 'src/mocks'
import { noop } from 'lodash'
import React from 'react'
import renderer from 'react-test-renderer'
import SupportPanel from './index'

const planningChannel = P9BMock.data.channels.channels[0] as ChannelPlanning
const forces = P9BMock.data.forces.forces
const blueForce = forces[1]
const blueRole = blueForce.roles[0]
const allTemplates = P9BMock.data.templates ? P9BMock.data.templates.templates : []
const platformTypes = (P9BMock.data.platformTypes && P9BMock.data.platformTypes.platformTypes) || []

const nonInfoMessages = planningChannelMessages.filter((msg) => msg.messageType !== INFO_MESSAGE_CLIPPED) as Array<MessagePlanning | MessageInteraction>
const planningMessages = nonInfoMessages.filter((msg) => msg.details.messageType === PLANNING_MESSAGE) as Array<MessagePlanning>

describe('Support Panel component: ', () => {
  it('renders component correctly', () => {
    const tree = renderer
      .create(<SupportPanel
        platformTypes={platformTypes}
        allForces={P9BMock.data.forces.forces}
        allPeriods={turnPeriod}
        gameDate={P9BMock.data.overview.gameDate}
        gameTurnLength={P9BMock.data.overview.gameTurnTime}
        currentWargame={P9BMock.currentWargame || ''}
        attributeTypes={[]}
        forceColors={forceColors(forces)}
        setSelectedAssets={noop}
        phase={Phase.Adjudication}
        selectedOrders={[]}
        setSelectedOrders={noop}
        currentTurn={P9BMock.gameTurn}
        planningMessages={planningMessages}
        interactionMessages={[]}
        channel={planningChannel}
        allTemplates={allTemplates}
        activityTimeChanel={noop}
        dispatch={noop}
        saveMessage={(): any => noop}
        saveNewActivityTimeMessage={(): any => noop}
        selectedForce={blueForce}
        selectedRoleId={blueRole.roleId}
        selectedRoleName={blueRole.name}
        setOpForcesForParent={noop}
        setOwnForcesForParent={noop}
        allOppAssets={[]}
        allOwnAssets={[]}
      />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
