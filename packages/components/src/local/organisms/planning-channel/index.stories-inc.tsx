import { CSSProperties } from '@material-ui/core/styles/withStyles'
import { Phase } from '@serge/config'
import { ChannelPlanning, ForceData, GroupedActivitySet, MessageDetails, MessagePlanning, ParticipantPlanning, ParticipantTemplate, PerForcePlanningActivitySet, PlanningActivity, PlayerUiActionTypes, Role, TemplateBody } from '@serge/custom-types'
import { MockPerForceActivities, MockPlanningActivities, P9Mock, planningMessages, planningMessagesBulk, planningMessageTemplatesMock } from '@serge/mocks'
import { withKnobs } from '@storybook/addon-knobs'
import { Story } from '@storybook/react/types-6-0'
import { noop } from 'lodash'
import React, { useEffect, useState } from 'react'
import PlanningChannel from './index'
import docs from './README.md'
import PlanningChannelProps from './types/props'

console.clear()

const ScriptDecorator: React.FC<{ src: string, children: React.ReactElement, style?: CSSProperties }> = ({ src, children, style }) => {
  const [loaded, setLoaded] = useState<boolean>(false)

  useEffect(() => {
    const head = document.querySelector('head')
    const script = document.createElement('script')
    if (!head) {
      return
    }
    script.async = true
    script.src = src
    script.onload = () => {
      setLoaded(true)
    }
    head.appendChild(script)
  }, [])

  return (
    loaded ? <div style={style}>{children}</div> : null
  )
}

const wrapper: React.FC = (storyFn: any) => <ScriptDecorator src='/leaflet.select/leaflet.control.select.js' style={{ height: '600px' }}>{storyFn()}</ScriptDecorator>

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

const planningActivities = MockPlanningActivities
const perForcePlanningActivities = MockPerForceActivities
const filledInPerForcePlanningActivities: PerForcePlanningActivitySet[] = perForcePlanningActivities.map((force: PerForcePlanningActivitySet): PerForcePlanningActivitySet => {
  return {
    force: force.force,
    groupedActivities: force.groupedActivities.map((group: GroupedActivitySet): GroupedActivitySet => {
      const res: GroupedActivitySet = {
        category: group.category,
        activities: group.activities.map((act: PlanningActivity | string): PlanningActivity => {
          if (typeof act === 'string') {
            const actId = act as string
            const activity = planningActivities.find((act: PlanningActivity) => act.uniqid === actId)
            if (!activity) {
              throw Error('Planning activity not found:' + actId)
            }
            return activity
          } else {
            return act
          }
        })
      }
      return res
    })
  }
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
      showPanel: false
    },
    controls: {
      expanded: false
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
    messages,
    phase
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

  const saveMessage = (dbName: string, details: MessageDetails, message: any) => {
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
    messages={messages}
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
    selectedRoleId={role?.roleId || ''}
    selectedRoleName={role?.name || ''}
    currentWargame={P9Mock.wargameTitle}
    selectedForce={force || forces[1]}
    phase={phase}
    turnNumber={4}
    allForces={forces}
    gameDate={P9Mock.data.overview.gameDate}
    currentTurn={P9Mock.gameTurn}
    forcePlanningActivities={filledInPerForcePlanningActivities}
  />
}
const doIt = 7 // don't transform the messages
const fixedMessages = doIt ? [] : planningMessages.map((msg: MessagePlanning) => {
  const newMsg = { ...msg }
  // drop the legacy entries
  delete newMsg.message.Assets
  delete newMsg.message.Targets
  delete newMsg.message.ActivityType
  // find the force
  const thisForce = newMsg.details.from.forceId
  const activities = filledInPerForcePlanningActivities.find((val: PerForcePlanningActivitySet) => val.force === thisForce)
  if (activities) {
    const grouped = activities.groupedActivities
    const randomGroup = grouped[Math.floor(Math.random() * grouped.length)]
    const activity = randomGroup.activities[Math.floor(Math.random() * randomGroup.activities.length)]
    if (activity && typeof activity !== 'string') {
      const planAct = activity as PlanningActivity
      newMsg.message.activity = planAct.uniqid
    }
  }
  const randomAssets = (force: ForceData): string[] => {
    const res = []
    if (force && force.assets) {
      const numAssets = 1 + Math.floor(Math.random() * 2)
      for (let i = 0; i < numAssets; i++) {
        const asset = force.assets[Math.floor(Math.random() * force.assets.length)]
        res.push(asset.uniqid)
      }
    }
    return res
  }
  const myForce = forces.find((force: ForceData) => force.uniqid === thisForce)
  const otherForces = forces.filter((force: ForceData) => force.uniqid !== thisForce)
  if (myForce) {
    const myAssetIds = randomAssets(myForce)
    newMsg.message.ownAssets = myAssetIds
  }
  if (otherForces) {
    const otherAssetIds = randomAssets(otherForces[Math.floor(Math.random() * otherForces.length)])
    newMsg.message.otherAssets = otherAssetIds
  }
  return newMsg
})

console.log('fixed', fixedMessages)

export const Default = Template.bind({})
Default.args = {
  messages: planningMessages,
  phase: Phase.Planning
}

export const BulkData = Template.bind({})
BulkData.args = {
  messages: planningMessagesBulk,
  phase: Phase.Planning
}

export const BulkDataInAdjudication = Template.bind({})
BulkDataInAdjudication.args = {
  messages: planningMessagesBulk,
  phase: Phase.Adjudication
}
