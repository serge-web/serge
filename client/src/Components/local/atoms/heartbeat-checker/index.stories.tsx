import React from 'react'

// Import component files
import HeartbeatChecker from './index'
import PropTypes from './types/props'
import docs from './README.md'
import { StoryFn } from '@storybook/react'

export default {
  title: 'local/atoms/HeartbeatChecker',
  component: HeartbeatChecker,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  },
  argTypes: {
    enableHeartbeat: {
      control: {
        type: 'boolean'
      }
    },
    animate: {
      control: {
        type: 'boolean'
      }
    }
  }
}

const Template: StoryFn<PropTypes> = (args) => {
  const { ...props } = args
  return <HeartbeatChecker {...props} />
}

export const ToggleHeartbeatChecker = Template.bind({})
ToggleHeartbeatChecker.args = {
  enableHeartbeat: true,
  animate: true
}
