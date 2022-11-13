import { INFO_MESSAGE_CLIPPED, INTERACTION_MESSAGE, PLANNING_MESSAGE } from '@serge/config'
import { ChannelPlanning, ForceData, MessageDetails, MessageInteraction, MessagePlanning, ParticipantTemplate, Role, TemplateBody } from '@serge/custom-types'
import { checkV3ParticipantStates, forceColors, platformIcons } from '@serge/helpers'
import { MockPerForceActivities, MockPlanningActivities, P9BMock, planningMessages as planningChannelMessages, planningMessageTemplatesMock } from '@serge/mocks'
import { withKnobs } from '@storybook/addon-knobs'
import { Story } from '@storybook/react/types-6-0'
import { noop } from 'lodash'
import React from 'react'
import { getOppAssets, getOwnAssets } from '../planning-assets/helpers/collate-assets'
import { fixPerForcePlanningActivities } from '../planning-channel/helpers/collate-plans-helper'
import SupportPanel from './index'
import docs from './README.md'
import SupportPanelProps from './types/props'

console.clear()

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

const planningChannel = P9BMock.data.channels.channels[0] as ChannelPlanning
const forces = P9BMock.data.forces.forces

const allRoles: string[] = []
forces.forEach((force: ForceData) => {
  force.roles.forEach((role: Role) => {
    allRoles.push(force.uniqid + ' ~ ' + role.roleId)
  })
})

const nonInfoMessage = planningChannelMessages.filter((msg) => msg.messageType !== INFO_MESSAGE_CLIPPED) as Array<MessagePlanning | MessageInteraction>
const planningMessages = nonInfoMessage.filter((msg: MessagePlanning | MessageInteraction) => msg.messageType === PLANNING_MESSAGE) as Array<MessagePlanning>
const interactionMessages = nonInfoMessage.filter((msg: MessagePlanning | MessageInteraction) => msg.messageType === INTERACTION_MESSAGE) as Array<MessageInteraction>
const attributeTypes = P9BMock.data.attributeTypes ? P9BMock.data.attributeTypes.attributes : []

export default {
  title: 'local/organisms/SupportPanel',
  component: SupportPanel,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    },
    options: {
      // We have no addons enabled in this story, so the addon panel should be hidden
      showPanel: true
    },
    controls: {
      expanded: true
    }
  },
  argTypes: {
    selectedRoleName: {
      name: 'View as',
      defaultValue: allRoles[1],
      options: allRoles,
      control: {
        type: 'select'
      }
    }
  }
}

const platformTypes = (P9BMock.data.platformTypes && P9BMock.data.platformTypes.platformTypes) || []

// produce the own and opp assets for this player force
const forceCols = forceColors(forces)
const platIcons = platformIcons(platformTypes)
const own = getOwnAssets(forces, forceCols, platIcons, forces[1], platformTypes, attributeTypes)
const opp = getOppAssets(forces, forceCols, platIcons, forces[1], platformTypes, attributeTypes)

const Template: Story<SupportPanelProps> = (args) => {
  const roleStr: string = args.selectedRoleName
  // separate out the two elements of the combined role
  const ind = roleStr.indexOf(' ~ ')
  const forceStr = roleStr.substring(0, ind)
  const role = roleStr.substring(ind + 3)

  const thisPart = checkV3ParticipantStates(planningChannel, forceStr, role, false)
  const myTemplateIds = thisPart.templatesIDs
  const myTemplates = planningMessageTemplatesMock.filter((value: TemplateBody) =>
    myTemplateIds.find((id: ParticipantTemplate) => id._id === value._id)
  )

  const saveMessage = (dbName: string, details: MessageDetails, message: any) => {
    return async (): Promise<void> => {
      console.log('dbName: ', dbName, ', details: ', details, ', message: ', message)
    }
  }

  const force = forces.find((value: ForceData) => value.uniqid === forceStr)
  if (!force) {
    throw Error('can\'t find force')
  }
  const roleVal = force.roles.find((roleVal: Role) => roleVal.roleId === role)
  if (!roleVal) {
    throw Error('can\'t find role')
  }

  const planningActivities = MockPlanningActivities
  const perForcePlanningActivities = MockPerForceActivities
  const filledInPerForcePlanningActivities = fixPerForcePlanningActivities(perForcePlanningActivities, planningActivities)

  return <SupportPanel
    platformTypes={platformTypes}
    planningMessages={planningMessages}
    interactionMessages={interactionMessages}
    forcePlanningActivities={filledInPerForcePlanningActivities}
    onReadAll={noop}
    selectedAssets={[]}
    setSelectedAssets={noop}
    selectedOrders={[]}
    attributeTypes={attributeTypes}
    setSelectedOrders={noop} onUnread={noop}
    onRead={noop}
    channel={planningChannel}
    allTemplates={myTemplates}
    adjudicationTemplate={planningMessageTemplatesMock[0]}
    activityTimeChanel={noop}
    allForces={P9BMock.data.forces.forces}
    gameDate={P9BMock.data.overview.gameDate}
    gameTurnTime={P9BMock.data.overview.gameTurnTime}
    currentWargame={P9BMock.currentWargame || ''}
    currentTurn={P9BMock.gameTurn}
    dispatch={noop}
    saveMessage={saveMessage}
    saveNewActivityTimeMessage={() => (): void => { console.log('save activity') }}
    selectedRoleId={roleVal.roleId}
    selectedRoleName={roleVal.name}
    selectedForce={force}
    isUmpire={!!force.umpire}
    setOpForcesForParent={noop}
    setOwnForcesForParent={noop}
    allOppAssets={opp}
    allOwnAssets={own}
  />
}

export const Default = Template.bind({})
Default.args = {

}
