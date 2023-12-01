import { withKnobs } from '@storybook/addon-knobs'
import { Story } from '@storybook/react/types-6-0'
import React, { useState } from 'react'

// Import component files
import { Phase } from 'src/config'
import { ChannelPlanning, ForceData, Role } from 'src/custom-types'
import { forceColors, incrementGameTime } from 'src/Helpers'
import { P9BMock, smallForces } from 'src/mocks'
import { noop } from 'lodash'
import PlanningMessagesList from './index'
import docs from './README.md'
import MessageListPropTypes from './types/props'

// console.clear()

const planningChannel = P9BMock.data.channels.channels[0] as ChannelPlanning
const wargame = P9BMock.data
const forces = P9BMock.data.forces.forces
const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>
const templates = wargame.templates ? wargame.templates.templates : []

// generate list of roles, for dropdown control
const allRoles: string[] = []
forces.forEach((force: ForceData) => {
  force.roles.forEach((role: Role) => {
    allRoles.push(force.uniqid + ' ~ ' + role.roleId)
  })
})

export default {
  title: 'local/organisms/PlanningMessagesList',
  component: PlanningMessagesList,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  },
  argTypes: {
    phase: {
      name: 'Game phase',
      options: [
        Phase.Planning,
        Phase.Adjudication
      ],
      defaultValue: Phase.Adjudication,
      control: {
        type: 'radio'
      }
    },
    selectedRoleName: {
      name: 'View as',
      options: allRoles,
      defaultValue: allRoles[1],
      control: {
        type: 'select'
      }
    }
  }
}

const overview = P9BMock.data.overview
const turnEndDate = incrementGameTime(overview.gameDate, overview.gameTurnTime)

const Template: Story<MessageListPropTypes> = (args) => {
  const { phase, currentTurn, hideForcesInChannel, turnFilter, selectedRoleName } = args
  const [isRead, setIsRead] = useState([true, false])

  const selectedRoleStr: string = selectedRoleName
  // separate out the two elements of the combined role
  const ind = selectedRoleStr.indexOf(' ~ ')
  const forceStr = selectedRoleStr.substring(0, ind)
  const roleStr = selectedRoleStr.substring(ind + 3)
  const force = forces.find((f: ForceData) => f.uniqid === forceStr)
  const role = force && force.roles.find((r: Role) => r.roleId === roleStr)
  const isUmpire = force && force.umpire

  const markAllAsRead = (): void => {
    setIsRead(isRead.map(() => true))
  }

  if (!force || !role) {
    return <></>
  }

  // remove later versions
  return <PlanningMessagesList
    selectedRoleName={selectedRoleName}
    selectedForce={force}
    currentTurn={currentTurn}
    allForces={smallForces}
    forceColors={forceColors(smallForces)}
    channel={planningChannel}
    gameTurnEndDate={turnEndDate}
    allTemplates={templates}
    playerRoleId={role.roleId}
    onMarkAllAsRead={markAllAsRead}
    isUmpire={!!isUmpire}
    phase={phase}
    hideForcesInChannel={hideForcesInChannel}
    selectedOrders={[]}
    setSelectedOrders={(): any => noop}
    turnFilter={turnFilter}
    onSupportPanelLayoutChange={noop}
    getSupportPanelState={noop}
  />
}

export const Default = Template.bind({})
Default.args = {
  hideForcesInChannel: true,
  currentTurn: P9BMock.gameTurn,
  turnFilter: -1
}

export const Bulk = Template.bind({})
Bulk.args = {
  hideForcesInChannel: true,
  currentTurn: P9BMock.gameTurn,
  turnFilter: -1
}
