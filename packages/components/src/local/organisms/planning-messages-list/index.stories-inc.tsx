import { withKnobs } from '@storybook/addon-knobs'
import { Story } from '@storybook/react/types-6-0'
import React, { useState } from 'react'

// Import component files
import { INFO_MESSAGE_CLIPPED, PLANNING_MESSAGE } from '@serge/config'
import { Asset, ChannelPlanning, MessageInteraction, MessagePlanning } from '@serge/custom-types'
import { mostRecentPlanningOnly } from '@serge/helpers'
import { P9Mock, planningMessages as planningChannelMessages, planningMessageTemplatesMock } from '@serge/mocks'
import { noop } from 'lodash'
import { AssetRow } from '../planning-assets/types/props'
import { customiseTemplate } from '../support-panel/helpers/customise-template'
import PlanningMessagesList from './index'
import docs from './README.md'
import MessageListPropTypes from './types/props'

console.clear()

const planningChannel = P9Mock.data.channels.channels[0] as ChannelPlanning
const forces = P9Mock.data.forces.forces
const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

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
    playerForceId: {
      name: 'Player force',
      defaultValue: 'Blue',
      control: {
        type: 'radio',
        options: [
          'White',
          'Blue',
          'Red'
        ]
      }
    }
  }
}

const nonInfoMessages = planningChannelMessages.filter((msg) => msg.messageType !== INFO_MESSAGE_CLIPPED) as Array<MessagePlanning | MessageInteraction>
const planningMessages = nonInfoMessages.filter((msg) => msg.messageType === PLANNING_MESSAGE) as Array<MessagePlanning>

const Template: Story<MessageListPropTypes> = (args) => {
  const { messages, playerForceId, currentTurn, playerRoleId, hideForcesInChannel, selectedForce } = args
  const [isRead, setIsRead] = useState([true, false])

  const markAllAsRead = (): void => {
    setIsRead(isRead.map(() => true))
  }
  const onRead = (detail: MessagePlanning): void => {
    const newState = isRead.map((state, id) => {
      if (id === messages.findIndex((item: any) => item._id === detail._id)) {
        state = true
      }
      return state
    })
    setIsRead(newState)
  }

  const localCustomiseTemplate = (schema: Record<string, any>): Record<string, any> => {
    const makeList = (assets: Asset[]): AssetRow[] => {
      return assets.map((asset: Asset): AssetRow => {
        const row: AssetRow = {
          id: asset.uniqid,
          icon: 'aaa',
          name: asset.name,
          condition: asset.condition,
          status: asset.status ? asset.status.state : 'unknown',
          platformType: asset.platformTypeId
        }
        return row
      }) 
    }
    return customiseTemplate(schema, makeList(forces[1].assets || []), makeList(forces[2].assets || []))
  }

  // remove later versions
  const newestMessages = mostRecentPlanningOnly(planningMessages)
  const blueMessages = newestMessages.filter((msg: MessagePlanning) => msg.details.from.forceId === forces[1].uniqid)
  return <PlanningMessagesList
    selectedRoleName={blueRole.name}
    selectedForce={selectedForce}
    currentTurn={currentTurn}
    messages={blueMessages}
    channel={planningChannel}
    customiseTemplate={localCustomiseTemplate}
    gameDate={P9Mock.data.overview.gameDate}
    allTemplates={planningMessageTemplatesMock}
    playerForceId={playerForceId}
    playerRoleId={playerRoleId}
    onMarkAllAsRead={markAllAsRead}
    onRead={onRead}
    isUmpire={true}
    hideForcesInChannel={hideForcesInChannel}
    selectedOrders={[]}
    setSelectedOrders={(): any => noop}
  />
}

const blueForce = P9Mock.data.forces.forces[0]
const blueRole = blueForce.roles[0]

export const Default = Template.bind({})
Default.args = {
  messages: planningMessages,
  playerForceId: blueForce.uniqid,
  selectedForce: blueForce,
  playerRoleId: blueRole.roleId,
  hideForcesInChannel: true,
  currentTurn: P9Mock.gameTurn
}
