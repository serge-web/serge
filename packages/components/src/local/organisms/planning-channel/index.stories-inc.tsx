import { Phase } from '@serge/config'
import { ChannelPlanning, ForceData, MessageDetails, ParticipantPlanning, ParticipantTemplate, PlayerUiActionTypes, Role, TemplateBody } from '@serge/custom-types'
import { P9Mock, planningMessages, planningMessageTemplatesMock } from '@serge/mocks'
import { withKnobs } from '@storybook/addon-knobs'
import { Story } from '@storybook/react/types-6-0'
import { noop } from 'lodash'
import React from 'react'
import PlanningChannel from './index'
import docs from './README.md'
import PlanningChannelProps from './types/props'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

const wargame = P9Mock.data
const channels = wargame.channels.channels
const planningChannel = channels[0]
const forces = wargame.forces.forces
const platformTypes = wargame.platformTypes ? wargame.platformTypes.platformTypes : []

// generate list of roles, for dropdown control
const allRoles: string[] = []
forces.forEach((force: ForceData) => {
  force.roles.forEach((role: Role) => {
    allRoles.push(force.uniqid + ' ~ ' + role.roleId)
  })
})

export default {
  title: 'local/organisms/PlanningChannel',
  component: PlanningChannel,
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
    selectedRoleId: {
      name: 'View as',
      defaultValue: allRoles[1],
      control: {
        type: 'select',
        options: allRoles
      }
    }
  },
  phase: {
    name: 'Game phase',
    defaultValue: Phase.Planning,
    control: {
      type: 'radio',
      options: [
        Phase.Planning,
        Phase.Adjudication
      ]
    }
  },
  wargameInitiated: {
    name: 'Wargame has been initiated',
    control: {
      type: 'boolean'
    }
  },
  children: {
    table: {
      disable: true
    }
  }
}

const Template: Story<PlanningChannelProps> = (args) => {
  const {
    selectedRoleId,
    isUmpire
  } = args

  const mockFn = (): PlayerUiActionTypes => ({
    type: 'mock' as any,
    payload: {}
  })

  const selectedRoleStr: string = selectedRoleId
  // separate out the two elements of the combined role
  const ind = selectedRoleStr.indexOf(' ~ ')
  const forceStr = selectedRoleStr.substring(0, ind)
  const roleStr = selectedRoleStr.substring(ind + 3)
  const force = forces.find((f: ForceData) => f.uniqid === forceStr)
  const role = force && force.roles.find((r: Role) => r.roleId === roleStr)

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

  return <PlanningChannel
    channel={channels[0] as ChannelPlanning}
    messages={planningMessages}
    templates={templateBodies}
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
    isUmpire={isUmpire}
    allForces={forces}
    gameDate={P9Mock.data.overview.gameDate}
    currentTurn={P9Mock.gameTurn}
  />
}

export const Default = Template.bind({})
Default.args = {}
