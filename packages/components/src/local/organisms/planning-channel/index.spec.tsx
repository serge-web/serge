import { ChannelUI, PlayerUi, PlayerUiActionTypes } from '@serge/custom-types'
import { P9Mock } from '@serge/mocks'
import { mount } from 'enzyme'
import { noop } from 'lodash'
import React from 'react'
import PlanningChannel2 from './index'

export const mockFn = (): PlayerUiActionTypes => ({
  type: "mock" as any,
  payload: {}
})

const channels = {}
P9Mock.data.channels.channels.forEach(c => {
  channels[c.uniqid] = {
    cData: c,
    name: c.name,
    uniqid: c.uniqid,
    messages: []
  } as ChannelUI
})

export const state: PlayerUi = {
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

describe('Planning Channel component: ', () => {
  it('renders component correctly', () => {
    const tree = mount(<PlanningChannel2
      channelId={P9Mock.data.channels.channels[0].uniqid}
      dispatch={noop}
      getAllWargameMessages={() => noop}
      markAllAsRead={mockFn}
      markUnread={mockFn}
      openMessage={mockFn}
      saveMessage={() => noop}
      reduxDispatch={noop}
      saveNewActivityTimeMessage={() => noop}
      state={state}
    />)
    expect(tree).toMatchSnapshot()
  })
})
