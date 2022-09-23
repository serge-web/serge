import { ChannelPlanning, ForceData, MessageDetails, ParticipantTemplate, Role, TemplateBody } from '@serge/custom-types'
import { checkV3ParticipantStates } from '@serge/helpers'
import { P9Mock, planningMessages, planningMessageTemplatesMock } from '@serge/mocks'
import { withKnobs } from '@storybook/addon-knobs'
import { Story } from '@storybook/react/types-6-0'
import { noop } from 'lodash'
import React from 'react'
import SupportPanel from './index'
import docs from './README.md'
import SupportPanelProps from './types/props'

console.clear()

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

const planningChannel = P9Mock.data.channels.channels[0] as ChannelPlanning
const forces = P9Mock.data.forces.forces

const allRoles: string[] = []
forces.forEach((force: ForceData) => {
  force.roles.forEach((role: Role) => {
    allRoles.push(force.uniqid + ' ~ ' + role.roleId)
  })
})

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

const platformTypes = (P9Mock.data.platformTypes && P9Mock.data.platformTypes.platformTypes) || []

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

  const saveMessage = (dbName: string, details: MessageDetails, message: object) => {
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

  return <SupportPanel
    platformTypes={platformTypes}
    messages={planningMessages}
    onReadAll={noop}
    onUnread={noop}
    onRead={noop}
    channel={planningChannel}
    templates={myTemplates}
    adjudicationTemplate={planningMessageTemplatesMock[0]}
    activityTimeChanel={noop}
    allForces={P9Mock.data.forces.forces}
    gameDate={P9Mock.data.overview.gameDate}
    currentWargame={P9Mock.currentWargame || ''}
    currentTurn={P9Mock.gameTurn}
    dispatch={noop}
    saveMessage={saveMessage}
    saveNewActivityTimeMessage={() => (): void => { console.log('save activity') }}
    selectedRoleId={roleVal.roleId}
    selectedRoleName={roleVal.name}
    selectedForce={force}
    isUmpire={!!force.umpire}
  />
}

export const Default = Template.bind({})
Default.args = {

}
