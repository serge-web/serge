import { INFO_MESSAGE_CLIPPED, INTERACTION_MESSAGE, Phase, PLANNING_MESSAGE } from '@serge/config'
import { ChannelPlanning, ForceData, MessageDetails, MessageInteraction, MessagePlanning, Role } from '@serge/custom-types'
import { forceColors, incrementGameTime, platformIcons } from '@serge/helpers'
import { P9BMock, planningMessages as planningChannelMessages, turnPeriod } from '@serge/mocks'
import { withKnobs } from '@storybook/addon-knobs'
import { Story } from '@storybook/react/types-6-0'
import { cloneDeep, noop } from 'lodash'
import moment from 'moment'
import React from 'react'
import { getOppAssets, getOwnAssets } from '../planning-assets/helpers/collate-assets'
import { TAB_ADJUDICATE, TAB_MY_ORDERS } from './constants'
import SupportPanel from './index'
import docs from './README.md'
import SupportPanelProps from './types/props'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

const planningChannel = P9BMock.data.channels.channels[0] as ChannelPlanning
const forces = P9BMock.data.forces.forces
const templates = P9BMock.data.templates ? P9BMock.data.templates.templates : []
const gameDate = P9BMock.data.overview.gameDate
const gameTime = moment(gameDate).valueOf()

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

const handler = (contact: any): void => {
  console.log('handling', contact)
}

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
const activities = P9BMock.data.activities ? P9BMock.data.activities.activities : []

// produce the own and opp assets for this player force
const forceCols = forceColors(forces)
const platIcons = platformIcons(platformTypes)
const own = getOwnAssets(forces, forceCols, platIcons, forces[1], platformTypes, attributeTypes, gameTime)
const opp = getOppAssets(forces, forceCols, platIcons, forces[1], platformTypes, attributeTypes, gameTime)

const Template: Story<SupportPanelProps> = (args) => {
  const roleStr: string = args.selectedRoleName
  const initialTab = args.initialTab
  const planningMessages = args.planningMessages
  const interactionMessages = args.interactionMessages

  // separate out the two elements of the combined role
  const ind = roleStr.indexOf(' ~ ')
  const forceStr = roleStr.substring(0, ind)
  const role = roleStr.substring(ind + 3)

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

  return <SupportPanel
    platformTypes={platformTypes}
    planningMessages={planningMessages}
    interactionMessages={interactionMessages}
    forcePlanningActivities={activities}
    onReadAll={noop}
    selectedAssets={[]}
    setSelectedAssets={noop}
    selectedOrders={[]}
    attributeTypes={attributeTypes}
    handleAdjudication={handler}
    setSelectedOrders={noop} onUnread={noop}
    onRead={noop}
    phase={Phase.Planning}
    channel={planningChannel}
    allTemplates={templates}
    allPeriods={turnPeriod}
    adjudicationTemplate={templates[0]}
    activityTimeChanel={noop}
    allForces={P9BMock.data.forces.forces}
    gameDate={P9BMock.data.overview.gameDate}
    gameTurnLength={P9BMock.data.overview.gameTurnTime}
    currentWargame={P9BMock.currentWargame || ''}
    currentTurn={P9BMock.gameTurn}
    dispatch={noop}
    saveMessage={saveMessage}
    saveNewActivityTimeMessage={() => (): void => { console.log('save activity') }}
    selectedRoleId={roleVal.roleId}
    selectedRoleName={roleVal.name}
    selectedForce={force}
    setOpForcesForParent={noop}
    setOwnForcesForParent={noop}
    allOppAssets={opp}
    allOwnAssets={own}
    initialTab={initialTab}
  />
}

// mangle some dates
const firstTurn = turnPeriod[0]
const startTime = moment.utc(firstTurn.gameDate).valueOf()
const secondTurn = turnPeriod[1]
const secondEnd = incrementGameTime(secondTurn.gameDate, secondTurn.gameTurnTime)
const secondEndTime = moment.utc(secondEnd).valueOf()
const secondStartTime = moment.utc(secondTurn.gameDate).valueOf()
const midPoint = secondStartTime + (secondEndTime - secondStartTime) / 2

const newPlans = cloneDeep(planningMessages) as MessagePlanning[]
const msgToMove1 = newPlans[4]
msgToMove1.message.startDate = moment.utc(midPoint).toISOString()
msgToMove1.message.endDate = moment.utc(midPoint + 500000).toISOString()
const msgToMove2 = newPlans[5]
msgToMove2.message.startDate = moment.utc(startTime - 100000).toISOString()
msgToMove2.message.endDate = moment.utc(midPoint + 500000).toISOString()

const newInter = cloneDeep(interactionMessages) as MessageInteraction[]
const interToMove1 = newInter[2]
const intertoMove2 = newInter[3]
if (interToMove1.details.interaction) {
  interToMove1.details.interaction = {
    ...interToMove1.details.interaction,
    startTime: moment.utc(midPoint).toISOString(),
    endTime: moment.utc(midPoint + 500000).toISOString()
  }
}
if (intertoMove2.details.interaction) {
  intertoMove2.details.interaction = {
    ...intertoMove2.details.interaction,
    startTime: moment.utc(startTime - 100000).toISOString(),
    endTime: moment.utc(midPoint + 500000).toISOString()
  }
}

export const Default = Template.bind({})
Default.args = {
  planningMessages: planningMessages,
  interactionMessages: newInter
}

export const OrdersTab = Template.bind({})
OrdersTab.args = {
  initialTab: TAB_MY_ORDERS,
  planningMessages: newPlans,
  interactionMessages: newInter
}

export const AdjudicationTab = Template.bind({})
AdjudicationTab.args = {
  initialTab: TAB_ADJUDICATE,
  planningMessages: newPlans,
  interactionMessages: newInter,
  selectedRoleName: allRoles[1]
}

// console.log('fixing data')
// forces.forEach((force) => {
//   if (force.assets) {
//     force.assets.forEach((asset) => {
//       if (asset.platformTypeId.includes('istar')) {
//         if (asset.attributes) {
//           asset.attributes.a_Search_Rate = 110
//           console.log('updated')
//         } else {
//           console.warn('found asset without attributes')
//         }
//       }
//     })
//   }
// })
// console.log('updated', forces)
