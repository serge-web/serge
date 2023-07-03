import { withKnobs } from '@storybook/addon-knobs'
import { Story } from '@storybook/react/types-6-0'
import React, { useState } from 'react'

// Import component files
import { INFO_MESSAGE_CLIPPED, INTERACTION_MESSAGE, Phase, PLANNING_MESSAGE } from '@serge/config'
import { Asset, ChannelPlanning, ForceData, MessageInteraction, MessagePlanning, MessageStructure, PlannedActivityGeometry, Role, TemplateBody } from '@serge/custom-types'
import { forceColors, incrementGameTime, mostRecentPlanningOnly } from '@serge/helpers'
import { P9BMock, P9Mock, planningMessages as planningChannelMessages, smallForces } from '@serge/mocks'
import { noop } from 'lodash'
import { AssetRow } from '../planning-assets/types/props'
import { customiseAssets } from '../support-panel/helpers/customise-assets'
import { randomOrdersDocs } from '../support-panel/helpers/gen-order-data'
import PlanningMessagesList from './index'
import docs from './README.md'
import MessageListPropTypes, { LocationEditCallbackHandler } from './types/props'

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

const filledInPerForcePlanningActivities = P9BMock.data.activities ? P9BMock.data.activities.activities : []

const nonInfoMessages = planningChannelMessages.filter((msg) => msg.messageType !== INFO_MESSAGE_CLIPPED) as Array<MessagePlanning | MessageInteraction>
const planningMessages = nonInfoMessages.filter((msg) => msg.messageType === PLANNING_MESSAGE) as Array<MessagePlanning>
const interactionMessages = nonInfoMessages.filter((msg) => msg.messageType === INTERACTION_MESSAGE) as Array<MessageInteraction>
const adjudicationTemplate = templates.find((tmp) => tmp._id.includes('djudicat')) || ({} as TemplateBody)

const editLocation: LocationEditCallbackHandler = (plans: PlannedActivityGeometry[], callback: { (newValue: PlannedActivityGeometry[]): void }): void => {
  console.log('edit location', plans, !!callback)
}

const overview = P9BMock.data.overview
const turnEndDate = incrementGameTime(overview.gameDate, overview.gameTurnTime)
const activities = P9BMock.data.activities ? P9BMock.data.activities.activities : []

const Template: Story<MessageListPropTypes> = (args) => {
  const { phase, planningMessages, currentTurn, hideForcesInChannel, turnFilter, selectedRoleName } = args
  const [isRead, setIsRead] = useState([true, false])

  const selectedRoleStr: string = selectedRoleName
  // separate out the two elements of the combined role
  const ind = selectedRoleStr.indexOf(' ~ ')
  const forceStr = selectedRoleStr.substring(0, ind)
  const roleStr = selectedRoleStr.substring(ind + 3)
  const force = forces.find((f: ForceData) => f.uniqid === forceStr)
  const role = force && force.roles.find((r: Role) => r.roleId === roleStr)
  const isUmpire = force && force.umpire

  let localMessages: MessagePlanning[] = []
  if (planningMessages && planningMessages.length) {
    localMessages = planningMessages
  } else {
    // put data generation into this `if` side to only generate it if necessary
    const docs: Array<MessagePlanning | MessageInteraction> = randomOrdersDocs(planningChannel.uniqid, 200, forces, [forces[1].uniqid, forces[2].uniqid],
      activities, adjudicationTemplate._id, overview.gameDate)
    localMessages = docs.filter((msg) => !msg.details.interaction) as MessagePlanning[]
  }

  const markAllAsRead = (): void => {
    setIsRead(isRead.map(() => true))
  }
  const onRead = (detail: MessagePlanning): void => {
    const newState = isRead.map((state, id) => {
      if (id === planningMessages.findIndex((item: any) => item._id === detail._id)) {
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
  if (!force || !role) {
    return <></>
  }

  // remove later versions
  const newestMessages = mostRecentPlanningOnly(localMessages)
  return <PlanningMessagesList
    selectedRoleName={selectedRoleName}
    selectedForce={force}
    currentTurn={currentTurn}
    planningMessages={newestMessages}
    interactionMessages={interactionMessages}
    allForces={smallForces}
    forceColors={forceColors(smallForces)}
    platformTypes={P9Mock.data.platformTypes ? P9Mock.data.platformTypes.platformTypes : []}
    channel={planningChannel}
    customiseTemplate={localCustomiseTemplate}
    gameTurnEndDate={turnEndDate}
    allTemplates={templates}
    playerRoleId={role.roleId}
    onMarkAllAsRead={markAllAsRead}
    onRead={onRead}
    isUmpire={!!isUmpire}
    phase={phase}
    hideForcesInChannel={hideForcesInChannel}
    selectedOrders={[]}
    setSelectedOrders={(): any => noop}
    turnFilter={turnFilter}
    editLocation={editLocation}
    forcePlanningActivities={filledInPerForcePlanningActivities}
    onSupportPanelLayoutChange={noop}
    getSupportPanelState={noop}
  />
}

export const Default = Template.bind({})
Default.args = {
  messages: planningMessages,
  hideForcesInChannel: true,
  currentTurn: P9BMock.gameTurn,
  turnFilter: -1
}

export const Bulk = Template.bind({})
Bulk.args = {
  messages: [],
  hideForcesInChannel: true,
  currentTurn: P9BMock.gameTurn,
  turnFilter: -1
}
