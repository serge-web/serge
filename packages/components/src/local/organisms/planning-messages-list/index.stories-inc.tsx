import { withKnobs } from '@storybook/addon-knobs'
import { Story } from '@storybook/react/types-6-0'
import React, { useState } from 'react'

// Import component files
import { INFO_MESSAGE_CLIPPED, PLANNING_MESSAGE } from '@serge/config'
import { Asset, ChannelPlanning, ForceData, MessageInteraction, MessagePlanning, MessageStructure, PlannedActivityGeometry, TemplateBody } from '@serge/custom-types'
import { incrementGameTime, mostRecentPlanningOnly } from '@serge/helpers'
import { P9BMock, planningMessages as planningChannelMessages } from '@serge/mocks'
import { noop } from 'lodash'
import { AssetRow } from '../planning-assets/types/props'
import { customiseAssets } from '../support-panel/helpers/customise-assets'
import { randomOrdersDocs } from '../support-panel/helpers/gen-order-data'
import PlanningMessagesList from './index'
import docs from './README.md'
import MessageListPropTypes, { LocationEditCallbackHandler } from './types/props'

console.clear()

const planningChannel = P9BMock.data.channels.channels[0] as ChannelPlanning
const wargame = P9BMock.data
const forces = P9BMock.data.forces.forces
const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>
const templates = wargame.templates ? wargame.templates.templates : []

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

const filledInPerForcePlanningActivities = P9BMock.data.activities ? P9BMock.data.activities.activities : []

const nonInfoMessages = planningChannelMessages.filter((msg) => msg.messageType !== INFO_MESSAGE_CLIPPED) as Array<MessagePlanning | MessageInteraction>
const planningMessages = nonInfoMessages.filter((msg) => msg.messageType === PLANNING_MESSAGE) as Array<MessagePlanning>
const adjudicationTemplate = templates.find((tmp) => tmp._id.includes('djudicat')) || ({} as TemplateBody)

const editLocation: LocationEditCallbackHandler = (plans: PlannedActivityGeometry[], callback: {(newValue: PlannedActivityGeometry[]): void}): void => {
  console.log('edit location', plans, !!callback)
}

const overview = P9BMock.data.overview
const turnEndDate = incrementGameTime(overview.gameDate, overview.gameTurnTime)
const activities = P9BMock.data.activities ? P9BMock.data.activities.activities : []

const Template: Story<MessageListPropTypes> = (args) => {
  const { messages, playerForceId, currentTurn, playerRoleId, hideForcesInChannel, selectedRoleName, selectedForce, turnFilter } = args
  const [isRead, setIsRead] = useState([true, false])

  let localMessages
  if (messages.length) {
    localMessages = messages
  } else {
    // put data generation into this `if` side to only generate it if necessary
    const docs: Array<MessagePlanning | MessageInteraction> = randomOrdersDocs(planningChannel.uniqid, 200, forces, [forces[1].uniqid,
      forces[2].uniqid], activities, adjudicationTemplate._id, overview.gameDate)
    localMessages = docs.filter((msg) => !msg.details.interaction) as MessagePlanning[]
  }

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

  const localCustomiseTemplate = (document: MessageStructure | undefined, schema: Record<string, any>): Record<string, any> => {
    const makeList = (assets: Asset[]): AssetRow[] => {
      return assets.map((asset: Asset): AssetRow => {
        const subType: string = asset.attributes ? asset.attributes.a_Type as string : ''
        const row: AssetRow = {
          id: asset.uniqid,
          icon: 'aaa',
          name: asset.name,
          platformType: asset.platformTypeId,
          subType: subType,
          health: 100,
          c4: 'Operational',
          domain: 'Air',
          attributes: { word: 'text', number: 123 },
          taskGroup: ''
        }
        return row
      })
    }
    if (!(document && document.Reference)) {
      console.error('We were relying on there being a document Reference')
    }
    const blueForce = document && document.Reference && document.Reference.includes('Blue')
    const ownForce = blueForce ? forces[1] : forces[2]
    const oppForce = blueForce ? forces[2] : forces[1]
    return customiseAssets(document, schema, makeList(ownForce.assets || []), makeList(oppForce.assets || []))
  }

  // remove later versions
  const newestMessages = mostRecentPlanningOnly(localMessages)
  return <PlanningMessagesList
    selectedRoleName={selectedRoleName}
    selectedForce={selectedForce}
    currentTurn={currentTurn}
    messages={newestMessages}
    channel={planningChannel}
    customiseTemplate={localCustomiseTemplate}
    gameDate={P9BMock.data.overview.gameDate}
    gameTurnEndDate={turnEndDate}
    allTemplates={templates}
    playerForceId={playerForceId}
    playerRoleId={playerRoleId}
    onMarkAllAsRead={markAllAsRead}
    onRead={onRead}
    isUmpire={true}
    hideForcesInChannel={hideForcesInChannel}
    selectedOrders={[]}
    setSelectedOrders={(): any => noop}
    turnFilter={turnFilter}
    editLocation={editLocation}
    forcePlanningActivities={filledInPerForcePlanningActivities}
  />
}

const randomMessage = planningMessages[Math.floor(Math.random() * planningMessages.length)]
const randomFrom = randomMessage.details.from
const randomForce = forces.find((force: ForceData) => force.uniqid === randomFrom.forceId)

export const Default = Template.bind({})
Default.args = {
  messages: planningMessages,
  playerForceId: randomFrom.forceId,
  selectedRoleName: randomFrom.roleName,
  selectedForce: randomForce,
  playerRoleId: randomFrom.roleId,
  hideForcesInChannel: true,
  currentTurn: P9BMock.gameTurn,
  turnFilter: -1
}

const blueForce = forces[1]
const blueRole = blueForce.roles[0]

export const Bulk = Template.bind({})
Bulk.args = {
  messages: [],
  playerForceId: blueForce.uniqid,
  selectedForce: blueForce,
  playerRoleId: blueRole.roleId,
  hideForcesInChannel: true,
  currentTurn: P9BMock.gameTurn,
  turnFilter: -1
}
