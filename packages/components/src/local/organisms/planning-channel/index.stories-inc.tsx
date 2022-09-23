import { MessageDetails, PlayerUiActionTypes } from '@serge/custom-types'
import { withKnobs } from '@storybook/addon-knobs'
import { Story } from '@storybook/react/types-6-0'
import { noop } from 'lodash'
import React from 'react'
import PlanningChannel2 from './index'
import { state } from './index.spec'
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

  const mockFn = (): PlayerUiActionTypes => ({
    type: "mock" as any,
    payload: {}
  })

  const saveMessage = (dbName: string, details: MessageDetails, message: object) => {
    return async (): Promise<void> => {
      console.log('dbName: ', dbName, ', details: ', details, ', message: ', message)
    }
  }

  return < PlanningChannel2
    channelId=''
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
