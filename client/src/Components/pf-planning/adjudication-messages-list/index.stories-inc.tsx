import { withKnobs } from '@storybook/addon-knobs'
import { Story } from '@storybook/react/types-6-0'
import React, { useState } from 'react'

// Import component files
import { Phase } from 'src/config'
import { ChannelPlanning } from 'src/custom-types'
import { forceColors } from 'src/Helpers'
import { P9BMock, turnPeriod } from 'src/mocks'
import AdjudicationMessagesList from './index'
import docs from './README.md'
import MessageListPropTypes from './types/props'

const wargame = P9BMock.data
const planningChannel = P9BMock.data.channels.channels[0] as ChannelPlanning
const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>
const forces = P9BMock.data.forces.forces

// console.clear()

export default {
  title: 'local/organisms/AdjudicationMessagesList',
  component: AdjudicationMessagesList,
  decorators: [withKnobs, wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  },
  argTypes: {
    playerForceId: {
      name: 'Player force',
      defaultValue: 'Blue',
      options: [
        'White',
        'Blue',
        'Red'
      ],
      control: {
        type: 'radio'
      }
    }
  }
}

const planningActivities = wargame.activities ? wargame.activities.activities : []

const Template: Story<MessageListPropTypes> = (args) => {
  const { playerRoleId, gameDate } = args
  const [isRead, setIsRead] = useState([true, false])

  const markAllAsRead = (): void => {
    setIsRead(isRead.map(() => true))
  }

  // remove later versions
  const platformTypes = P9BMock.data.platformTypes ? P9BMock.data.platformTypes.platformTypes : []
  // const gameStartTime = '2022-11-14T03:00:00.000Z' // P9BMock.data.overview.gameDate

  // run through an adjudication
  // const interactions: MessageInteraction[] = []
  const gameStartTimeLocal = gameDate || P9BMock.data.overview.gameDate

  const templates = wargame.templates ? wargame.templates.templates : []
  return <AdjudicationMessagesList
    currentWargame={P9BMock.name}
    forces={forces}
    periods={turnPeriod}
    platformTypes={platformTypes}
    currentTurn={1}
    phase={Phase.Adjudication}
    forceColors={forceColors(forces)}
    channel={planningChannel}
    gameDate={gameStartTimeLocal}
    gameTurnLength={P9BMock.data.overview.gameTurnTime}
    template={templates[0]}
    playerRoleId={playerRoleId}
    onMarkAllAsRead={markAllAsRead}
    turnFilter={-1}
    forcePlanningActivities={planningActivities}
  />
}

const umpireForce = P9BMock.data.forces.forces[0]
const umpireFole = umpireForce.roles[1]

export const Default = Template.bind({})
Default.args = {
  playerRoleId: umpireFole.roleId
}

export const TestIstar = Template.bind({})
TestIstar.args = {
  playerRoleId: umpireFole.roleId
}
