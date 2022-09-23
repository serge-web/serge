import { ChannelUI, MessageDetails, PlayerUi, PlayerUiActionTypes } from '@serge/custom-types'
import { P9Mock } from '@serge/mocks'
import { withKnobs } from '@storybook/addon-knobs'
import { Story } from '@storybook/react/types-6-0'
import { noop } from 'lodash'
import React from 'react'
import PlanningChannel2 from './index'
import docs from './README.md'
import PlanningChannelProps from './types/props'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>

export default {
  title: 'local/organisms/PlanningChannel2',
  component: PlanningChannel2,
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
  argTypes: {}
}

const Template: Story<PlanningChannelProps> = () => {

  const channels = {}
  P9Mock.data.channels.channels.forEach(c => {
    channels[c.uniqid] = {
      cData: c,
      name: c.name,
      uniqid: c.uniqid,
      messages: []
    } as ChannelUI
  })

  const state: PlayerUi = {
    channels: channels,
    selectedForce: P9Mock.data.forces.forces[0],
    allForces: [],
    allPlatformTypes: [],
    selectedRole: '',
    selectedRoleName: '',
    isObserver: false,
    isUmpire: false,
    isGameControl: false,
    currentTurn: 0,
    phase: '',
    gameDate: '',
    gameTurnTime: {
      millis: 1,
      unit: 'millis'
    },
    realtimeTurnTime: 0,
    turnEndTime: '',
    timeWarning: 0,
    adjudicationStartTime: '',
    gameDescription: '',
    currentWargame: '',
    wargameTitle: '',
    chatChannel: {
      messages: [],
      name: '',
      template: {}
    },
    allChannels: [],
    infoMarkers: [],
    markerIcons: [],
    allTemplatesByKey: {},
    showObjective: false,
    updateMessageState: false,
    wargameInitiated: false,
    feedbackMessages: [],
    tourIsOpen: false,
    showAccessCodes: false,
    logPlayerActivity: false,
    isInsightViewer: false,
    isRFIManager: false,
    playerMessageLog: {}
  }

  const mockFn = (): PlayerUiActionTypes => ({
    type: "mock" as any,
    payload: {}
  })

  const saveMessage = (dbName: string, details: MessageDetails, message: object) => {
    return async (): Promise<void> => {
      console.log('dbName: ', dbName, ', details: ', details, ', message: ', message)
    }
  }

  return <PlanningChannel2
    channelId={P9Mock.data.channels.channels[0].uniqid}
    dispatch={noop}
    getAllWargameMessages={() => noop}
    markAllAsRead={mockFn}
    markUnread={mockFn}
    openMessage={mockFn}
    saveMessage={saveMessage}
    reduxDispatch={noop}
    saveNewActivityTimeMessage={() => noop}
    state={state}
  />
}

export const Default = Template.bind({})
Default.args = {}
